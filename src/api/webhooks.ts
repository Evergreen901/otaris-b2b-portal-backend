import express from 'express';
import { IRequest } from 'interfaces/IRequest';
import Requests from '../models/Requests';
const router = express.Router();

const { TYPEFORM_EMAIL, TYPEFORM_PROJECT, TYPEFORM_NAME } = process.env;
console.log("Typeform fields loaded:", TYPEFORM_EMAIL, TYPEFORM_PROJECT, TYPEFORM_NAME);

router.post('/request-access', async (req, res) => {
  console.log('-> webhook-request-access', req.body)

  const { event_type, form_response } = JSON.parse(req.body);
  console.log("form response", JSON.stringify(form_response));

  // filter response events only
  if (event_type === 'form_response') {
    try {

      // find name, project and email
      let name, project, email;
      for (const answer of form_response.answers) {
        switch (answer.field.ref) {
          case TYPEFORM_EMAIL:
            email = answer.email;
            break;
          case TYPEFORM_NAME:
            name = answer.text;
            break;
          case TYPEFORM_PROJECT:
            project = answer.text;
            break;
          default:
          // do nothing
        }
      }

      // create object on DB
      await Requests.addRequest({
        name,
        project,
        email,
        original: form_response
      });

      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  }
});

module.exports = router;
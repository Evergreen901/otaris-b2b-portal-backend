import { Types } from "mongoose";
import Requests from "./models/Requests";
import { IRequest } from "./interfaces/IRequest";

const seed = async () => {
    console.log("Seeder: seeding database");

    if ((await Requests.getAll()).length > 0) {
        console.log("Seeder: database already seeded.");
        return;
    }

    console.log("Seeder: Add requests");
    // add several typeform requests
    let lastRequestAdded: IRequest & { _id: Types.ObjectId; } | undefined;

    [{
        email: "gm@faculty.group",
        project: "Faculty Labes",
        name: "Guilherme Mussi"
    },
    {
        email: "kr@faculty.group",
        project: "Otaris",
        name: "Kevin Rogers"
    }, {
        email: "sw@faculty.group",
        project: "Otaris",
        name: "Steven Wong"
    }].forEach(async ({ email, name, project }) => {
        console.log("Seeder: adding request:", email, name, project)
        // add a typeform request
        lastRequestAdded = await Requests.addRequest({
            email, 
            name, 
            project,
            original: getOriginal(email, name, project)
        });
    });

    // hide the last request
    Requests.setHidden(lastRequestAdded!._id.toString(), true);  
};

const getOriginal = (email: string, project: string, name: string) => { return {
    "event_id": "01GSASEWTPMD4W9DMY605CXQVB",
    "event_type": "form_response",
    "form_response": {
      "form_id": "v0zWKXSW",
      "token": "01GSASEWTPMD4W9DMY605CXQVB",
      "landed_at": "2023-02-15T15:00:34Z",
      "submitted_at": "2023-02-15T15:00:34Z",
      "definition": {
        "id": "v0zWKXSW",
        "title": "Otaris Request Access (DEV)",
        "fields": [
          {
            "id": "47Hrry8MUnQO",
            "ref": "43c16664-899d-447d-8d53-fa832c1fc3a3",
            "type": "email",
            "title": "First off, what's your email address?",
            "properties": {}
          },
          {
            "id": "cW7Ap1EJpBAr",
            "ref": "0674ff32-53ff-4e92-a007-d5a79efffa6b",
            "type": "short_text",
            "title": "What's your full name?",
            "properties": {}
          },
          {
            "id": "a27Ehds1t09v",
            "ref": "9700662d-527c-4c0e-93ab-eb8de12b0b90",
            "type": "short_text",
            "title": "What's your telegram handle?",
            "properties": {}
          },
          {
            "id": "Ef18aGt4G4zl",
            "ref": "c4312200-a943-44fe-939a-7a4603d62466",
            "type": "short_text",
            "title": "What is your project name?",
            "properties": {}
          },
          {
            "id": "o0yCAt97qAzM",
            "ref": "e245154c-d3fe-4af3-8245-d8091d4534c6",
            "type": "short_text",
            "title": "What's your position at the project?",
            "properties": {}
          },
          {
            "id": "AP5fw1mPWo0O",
            "ref": "e35ae1a4-c037-4654-9110-ce5451d418a6",
            "type": "long_text",
            "title": "Describe your project in 3-5 sentences",
            "properties": {}
          },
          {
            "id": "qootIRvVRzbK",
            "ref": "c49d4327-449a-4d49-a494-d83aab55ae6c",
            "type": "multiple_choice",
            "title": "What category/segment you belong to?",
            "properties": {},
            "allow_multiple_selections": true,
            "allow_other_choice": true,
            "choices": [
              {
                "id": "U1aKOcizLQGu",
                "label": "AI & Big Data"
              },
              {
                "id": "JTDXTCCn7qo7",
                "label": "Analytics"
              },
              {
                "id": "yfPTIk9lFT73",
                "label": "Asset Management"
              },
              {
                "id": "LXn2rerZFrAp",
                "label": "Content Creation"
              },
              {
                "id": "klhoev582hKN",
                "label": "Cybersecurity"
              },
              {
                "id": "niVlJtQvaoOM",
                "label": "DAO"
              },
              {
                "id": "wHY4VUeYtBiv",
                "label": "DeFi"
              },
              {
                "id": "2zmMhL6frqzP",
                "label": "Derivatives"
              },
              {
                "id": "xcnk1dFFtlAZ",
                "label": "E-commerce"
              },
              {
                "id": "rwpgGJvBuTL6",
                "label": "Education"
              },
              {
                "id": "5biV3tFbCOVJ",
                "label": "Energy"
              },
              {
                "id": "nYYBQwi475AE",
                "label": "Entertainment"
              },
              {
                "id": "jy8iOHubch50",
                "label": "Fan Token"
              },
              {
                "id": "67973cEVrYpb",
                "label": "File Sharing"
              },
              {
                "id": "DrWRQrmPQ1qg",
                "label": "Gambling"
              },
              {
                "id": "Zf8Wmk0APOsM",
                "label": "Health"
              },
              {
                "id": "MPhG4l7Swod2",
                "label": "Identity"
              },
              {
                "id": "kuFJ03UMsgl9",
                "label": "Insurance"
              },
              {
                "id": "2JRJEcF35aTg",
                "label": "IoT"
              },
              {
                "id": "Wf3k6WzkU4DE",
                "label": "Launchpad"
              },
              {
                "id": "VawGHlo54wnK",
                "label": "Logistics"
              },
              {
                "id": "yw0fxOuZUwKn",
                "label": "Marketing"
              },
              {
                "id": "RQTXNYMmFHeS",
                "label": "Media"
              },
              {
                "id": "XevkbQdpQfCm",
                "label": "Metaverse"
              },
              {
                "id": "SfF3w5TPKpio",
                "label": "Music"
              },
              {
                "id": "0r2l3ANOcGNc",
                "label": "NFTs and Collectibles"
              },
              {
                "id": "Ueq9mm43fjrq",
                "label": "Oracles"
              },
              {
                "id": "Qh2uDBAiYhHP",
                "label": "Play to Earn"
              },
              {
                "id": "hdnbs516cyxG",
                "label": "Privacy"
              },
              {
                "id": "VS0tICLzADjy",
                "label": "Real Estate"
              },
              {
                "id": "0OpiBcGYiynq",
                "label": "Rollups"
              },
              {
                "id": "oCG0bd4HOfx5",
                "label": "Sports"
              },
              {
                "id": "m4UMUuQDLW3v",
                "label": "Stablecoin"
              },
              {
                "id": "cJOltQMn8eDk",
                "label": "Tourism"
              },
              {
                "id": "P6NTncDa7nuY",
                "label": "Wallet"
              }
            ]
          },
          {
            "id": "1C9vRCj3vA1s",
            "ref": "2b1b2e2c-3ac3-4c58-8709-7c237dd5ad5e",
            "type": "multiple_choice",
            "title": "Which chain/platform do you intend to launch?",
            "properties": {},
            "allow_other_choice": true,
            "choices": [
              {
                "id": "UE6XkpHmGS7u",
                "label": "Ethereum"
              },
              {
                "id": "SXVnbXl8H7TR",
                "label": "Polygon"
              },
              {
                "id": "3adQ2SE6MOEm",
                "label": "Avalanche"
              },
              {
                "id": "NQ7PcWdbPMGa",
                "label": "Fantom"
              },
              {
                "id": "8TMinra91jZd",
                "label": "BNB"
              },
              {
                "id": "Xhr4uODJI7r6",
                "label": "Solana"
              },
              {
                "id": "enY6akg9ofHN",
                "label": "Other L2"
              },
              {
                "id": "3uPO5RmKKNI5",
                "label": "Don't know yet"
              }
            ]
          },
          {
            "id": "7L5NR4zBicoU",
            "ref": "dbd9a927-8724-4a91-8ff1-2a4c2b99c303",
            "type": "dropdown",
            "title": "What stage of development are you currently in?",
            "properties": {}
          },
          {
            "id": "TSrIAz97jaH2",
            "ref": "4d6bb367-fe49-4441-869a-b92388de0d92",
            "type": "long_text",
            "title": "Links to Website/Whitepaper/Litepaper/Onepager/Pitch deck",
            "properties": {}
          },
          {
            "id": "6okNZ5gugHnK",
            "ref": "bf1dab25-5880-418c-8dcc-2856284cf334",
            "type": "website",
            "title": "Link to app/test environment/github",
            "properties": {}
          },
          {
            "id": "qlcIWkiuCFKd",
            "ref": "4027963f-f554-4fb6-862e-ccd1e5b3aa3e",
            "type": "multiple_choice",
            "title": "What are your key challenges currently?",
            "properties": {},
            "allow_multiple_selections": true,
            "allow_other_choice": true,
            "choices": [
              {
                "id": "56BQnUOrb5OT",
                "label": "Building/managing the community"
              },
              {
                "id": "8zKkPxdUbnyJ",
                "label": "Creating documentation (litepaper, pitch deck, etc.)"
              },
              {
                "id": "lxIR0Zho2X2t",
                "label": "Designing the token model/economy"
              },
              {
                "id": "TmwmSMFzvZeW",
                "label": "Finding product/market fit"
              },
              {
                "id": "zEIHKlA4yJ4M",
                "label": "Finding the right chain/platform"
              },
              {
                "id": "l8JowQRCpHu2",
                "label": "Finding the right partners/service providers"
              },
              {
                "id": "gAT5Cb0eZS5C",
                "label": "Fundraising"
              },
              {
                "id": "zB8u7YB8az3l",
                "label": "IT & product development"
              },
              {
                "id": "to0O5HuQ9IvX",
                "label": "Legal and regulatory compliance"
              },
              {
                "id": "O9cZpOgrq6rG",
                "label": "Providing liquidity for the token"
              },
              {
                "id": "d0LxxrIVYysJ",
                "label": "Running social and marketing campaigns"
              },
              {
                "id": "bU6hQKoHcsuu",
                "label": "Scaling the team"
              },
              {
                "id": "TlgYRz3rVsYY",
                "label": "Treasury management & finance"
              }
            ]
          },
          {
            "id": "K1FBYdioEhk7",
            "ref": "4f5cf6d9-fb2d-489d-ad4a-f442323de8e3",
            "type": "multiple_choice",
            "title": "What do you expect your key challenges will be in 3-6 months?",
            "properties": {},
            "allow_multiple_selections": true,
            "allow_other_choice": true,
            "choices": [
              {
                "id": "fyIl0ekUogqa",
                "label": "Building/managing the community"
              },
              {
                "id": "5ttxQehvvEU2",
                "label": "Creating documentation (litepaper, pitch deck, etc.)"
              },
              {
                "id": "u4v34ZMf3lRU",
                "label": "Designing the token model/economy"
              },
              {
                "id": "0xKE5qjGiscF",
                "label": "Finding product/market fit"
              },
              {
                "id": "2NZ9pRHX616E",
                "label": "Finding the right chain/platform"
              },
              {
                "id": "yTUVyNTB5VZ1",
                "label": "Finding the right partners/service providers"
              },
              {
                "id": "ya3p6qYRf6Tv",
                "label": "Fundraising"
              },
              {
                "id": "egceeD4b9kEB",
                "label": "IT & product development"
              },
              {
                "id": "14WOC3oo1mBF",
                "label": "Legal and regulatory compliance"
              },
              {
                "id": "3GoJTgMXelaR",
                "label": "Providing liquidity for the token"
              },
              {
                "id": "6O5KmZpSyXBZ",
                "label": "Running social and marketing campaigns"
              },
              {
                "id": "5ixDeHutO5gk",
                "label": "Scaling the team"
              },
              {
                "id": "ViysdpCacs2v",
                "label": "Treasury management & finance"
              }
            ]
          }
        ]
      },
      "answers": [
        {
          "type": "email",
          "email": email,
          "field": {
            "id": "47Hrry8MUnQO",
            "type": "email",
            "ref": "43c16664-899d-447d-8d53-fa832c1fc3a3"
          }
        },
        {
          "type": "text",
          "text": "Lorem ipsum dolor",
          "field": {
            "id": "cW7Ap1EJpBAr",
            "type": "short_text",
            "ref": "0674ff32-53ff-4e92-a007-d5a79efffa6b"
          }
        },
        {
          "type": "text",
          "text": name,
          "field": {
            "id": "a27Ehds1t09v",
            "type": "short_text",
            "ref": "9700662d-527c-4c0e-93ab-eb8de12b0b90"
          }
        },
        {
          "type": "text",
          "text": project,
          "field": {
            "id": "Ef18aGt4G4zl",
            "type": "short_text",
            "ref": "c4312200-a943-44fe-939a-7a4603d62466"
          }
        },
        {
          "type": "text",
          "text": "Lorem ipsum dolor",
          "field": {
            "id": "o0yCAt97qAzM",
            "type": "short_text",
            "ref": "e245154c-d3fe-4af3-8245-d8091d4534c6"
          }
        },
        {
          "type": "text",
          "text": "Lorem ipsum dolor",
          "field": {
            "id": "AP5fw1mPWo0O",
            "type": "long_text",
            "ref": "e35ae1a4-c037-4654-9110-ce5451d418a6"
          }
        },
        {
          "type": "choices",
          "choices": {
            "labels": [
              "Barcelona"
            ]
          },
          "field": {
            "id": "qootIRvVRzbK",
            "type": "multiple_choice",
            "ref": "c49d4327-449a-4d49-a494-d83aab55ae6c"
          }
        },
        {
          "type": "choice",
          "choice": {
            "label": "Barcelona"
          },
          "field": {
            "id": "1C9vRCj3vA1s",
            "type": "multiple_choice",
            "ref": "2b1b2e2c-3ac3-4c58-8709-7c237dd5ad5e"
          }
        },
        {
          "type": "choice",
          "choice": {
            "label": "Barcelona"
          },
          "field": {
            "id": "7L5NR4zBicoU",
            "type": "dropdown",
            "ref": "dbd9a927-8724-4a91-8ff1-2a4c2b99c303"
          }
        },
        {
          "type": "text",
          "text": "Lorem ipsum dolor",
          "field": {
            "id": "TSrIAz97jaH2",
            "type": "long_text",
            "ref": "4d6bb367-fe49-4441-869a-b92388de0d92"
          }
        },
        {
          "type": "url",
          "url": "http://example-url.com",
          "field": {
            "id": "6okNZ5gugHnK",
            "type": "website",
            "ref": "bf1dab25-5880-418c-8dcc-2856284cf334"
          }
        },
        {
          "type": "choices",
          "choices": {
            "labels": [
              "Barcelona"
            ]
          },
          "field": {
            "id": "qlcIWkiuCFKd",
            "type": "multiple_choice",
            "ref": "4027963f-f554-4fb6-862e-ccd1e5b3aa3e"
          }
        },
        {
          "type": "choices",
          "choices": {
            "labels": [
              "Barcelona"
            ]
          },
          "field": {
            "id": "K1FBYdioEhk7",
            "type": "multiple_choice",
            "ref": "4f5cf6d9-fb2d-489d-ad4a-f442323de8e3"
          }
        }
      ],
      "thankyou_screen_ref": "default_tys"
    }
  } 
};
export default seed;
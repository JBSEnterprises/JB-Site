/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest, Request } from "firebase-functions/v2/https";
import { Response } from "express"

import * as sgMail from "@sendgrid/mail"

const API_KEY = ""

sgMail.setApiKey(API_KEY)

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

import { google } from 'googleapis';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:8080', // Allow requests from this origin
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true, // Allow cookies and credentials
}));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Google Sheets API setup
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SPREADSHEET_ID = '1e4tUiaBDKUmoFjS5oUvqSJHa7deGDKIPuX9arccAcno';
const SHEET_NAME = 'Sheet1';

const auth = new google.auth.GoogleAuth({
  keyFile: 'credentials.json', // Path to your service account key file
  scopes: SCOPES,
});

const sheets = google.sheets({ version: 'v4', auth });

// API endpoint
app.post('/api/contact', async (req, res) => {
  const { name, phone, message } = req.body;

  try {
    // Append data to Google Sheetscó
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:C`,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[name, phone, message]],
      },
    });

    res.status(200).send('Data added to Google Sheet successfully');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Failed to add data to Google Sheet');
  }
});
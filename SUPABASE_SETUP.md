# Supabase Setup Guide

This guide will help you set up Supabase for the early access email collection feature.

## Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Choose your organization
4. Enter a project name (e.g., "iris-early-access")
5. Enter a database password (save this securely)
6. Choose a region close to your users
7. Click "Create new project"

## Step 2: Get Your Project Credentials

1. In your Supabase dashboard, go to Settings → API
2. Copy your Project URL and anon/public key

### For Development (Local)
Create a `.env` file in your project root with:

```env
VITE_SUPABASE_URL=your_project_url_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

### For Production (GitHub Pages)
Add these as GitHub repository secrets:

1. Go to your GitHub repository
2. Navigate to Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Add the following secrets:
   - **Name**: `SUPABASE_URL` | **Value**: `your_project_url_here`
   - **Name**: `SUPABASE_ANON_KEY` | **Value**: `your_anon_key_here`

**Note**: These secrets will be automatically available to your deployed application on GitHub Pages.

## Step 3: Create the Database Table

1. In your Supabase dashboard, go to SQL Editor
2. Run the following SQL script:

```sql
-- Create the early_access_emails table
CREATE TABLE IF NOT EXISTS early_access_emails (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_early_access_emails_email ON early_access_emails(email);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_early_access_emails_created_at ON early_access_emails(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE early_access_emails ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserting emails (for the public)
CREATE POLICY "Allow public to insert early access emails" ON early_access_emails
  FOR INSERT WITH CHECK (true);

-- Create a policy that allows reading emails (you can restrict this later)
CREATE POLICY "Allow authenticated users to read early access emails" ON early_access_emails
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create a function to automatically update the updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger to automatically update updated_at
CREATE TRIGGER update_early_access_emails_updated_at
  BEFORE UPDATE ON early_access_emails
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

## Step 4: Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to the early access page
3. Try submitting an email
4. Check your Supabase dashboard → Table Editor → early_access_emails to see the entry

## Security Notes

- The current setup allows public insertion of emails (which is what you want for early access)
- Reading emails is restricted to authenticated users only
- You can modify the RLS policies later if you need different access patterns
- Consider adding rate limiting for production use

## Troubleshooting

- **"Missing Supabase environment variables"**: 
  - For development: Make sure your `.env` file is in the project root and contains the correct variables
  - For production: Check that your GitHub repository secrets are properly configured
- **"Network error"**: Check your internet connection and Supabase project status
- **"Email already registered"**: This is expected behavior - the email is already in the database
- **Build errors**: Make sure you've installed the Supabase client: `npm install @supabase/supabase-js`
- **Deployment issues**: Ensure your GitHub secrets are set correctly and the build process can access them 
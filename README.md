# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/909ae932-93b3-450b-aee0-a918a4ff8f95

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/909ae932-93b3-450b-aee0-a918a4ff8f95) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Supabase (for database)

## Supabase Setup

This project uses Supabase to store early access email registrations. To set up Supabase:

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Create a `.env` file in the root directory with your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
3. Run the following SQL in your Supabase SQL editor to create the required table:

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

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/909ae932-93b3-450b-aee0-a918a4ff8f95) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

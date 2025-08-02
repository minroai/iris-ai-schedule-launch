# Supabase Setup Guide

This guide will help you set up Supabase for the Iris AI early access form.

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Choose your organization and project name
3. Set a database password (save this securely)
4. Choose a region close to your users
5. Wait for the project to be created

## 2. Set Up the Database Schema

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Copy and paste the contents of `supabase-schema.sql` into the editor
4. Run the SQL to create the table and policies

## 3. Get Your Project Credentials

1. In your Supabase dashboard, go to Settings > API
2. Copy the following values:
   - **Project URL** (looks like: `https://your-project-id.supabase.co`)
   - **anon public** key (starts with `eyJ...`)

## 4. Set Up Environment Variables

### For Local Development

Create a `.env` file in your project root:

```env
VITE_SUPABASE_URL=your_supabase_project_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### For GitHub Pages Deployment

1. Go to your GitHub repository
2. Navigate to Settings > Secrets and variables > Actions
3. Add the following repository secrets:
   - `VITE_SUPABASE_URL`: Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase anon key

## 5. Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to the early access form
3. Submit an email address
4. Check your Supabase dashboard > Table Editor > early_access_users to see the entry

## 6. Security Notes

- The anon key is safe to use in client-side code as it has limited permissions
- Row Level Security (RLS) is enabled on the table
- Only authenticated users can read the data (for admin purposes)
- Anyone can insert new early access requests
- Email addresses are unique to prevent duplicates

## 7. Database Schema Details

The `early_access_users` table includes:
- `id`: Unique UUID identifier
- `email`: User's email address (unique)
- `created_at`: Timestamp when the user signed up
- `updated_at`: Timestamp when the record was last updated

## Troubleshooting

- **"Missing Supabase environment variables"**: Make sure your `.env` file is in the project root and contains the correct variables
- **"This email is already registered"**: This is expected behavior to prevent duplicate signups
- **Build errors**: Ensure the environment variables are properly set in your GitHub secrets for deployment 
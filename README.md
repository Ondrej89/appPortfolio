Portfolio app

**Production deploinment on vercel has failed something to do with graphgl request**

//To do have to find out why

**For development on local machine**

Create .env file in root with next credentials

NEXT_PUBLIC_GRAFBASE_API_URL=

NEXT_PUBLIC_GRAFBASE_API_KEY=

GOOGLE_CLIENT_ID=

GOOGLE_CLIENT_SECRET=

NEXTAUTH_SECRET=

NEXTAUTH_URL=http://localhost:3000

CLOUDINARY_NAME=

CLOUDINARY_KEY=

CLOUDINARY_SECRET=

Create .env in grafbase folder with NEXTAUTH_SECRET=

run npm run dev and in another terminal run npx grafbase@0.24 dev to run grafbase db localy

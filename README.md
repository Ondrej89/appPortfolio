Portfolio app
**Production deploinment to Vercel has failed some error to graphql??**
**To do figure up what error is fucking things up**

for development enviroment you will need to create .env file in root and .env file in grafbase folder

.env in root should look like:
//grafbase credentials
NEXT_PUBLIC_GRAFBASE_API_URL=
NEXT_PUBLIC_GRAFBASE_API_KEY=
//google credentials
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXTAUTH_SECRET=gy24Cs73qp1UrFzR6EAJ16PQhJs84DsBDM1MXtOB/Os=
NEXTAUTH_URL=http://localhost:3000
//cloudniary credentials for uploading images
CLOUDINARY_NAME=
CLOUDINARY_KEY=
CLOUDINARY_SECRET=
 .env in grafbase folder
NEXTAUTH_SECRET=gy24Cs73qp1UrFzR6EAJ16PQhJs84DsBDM1MXtOB/Os=
 

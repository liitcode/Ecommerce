# Llamazon

|Landing Page|CheckoutPage|
|-----|-----|
|![landing](https://ik.imagekit.io/16zqnfdfuhh/llamazon/home.png?updatedAt=1628191909448)|![checkout](https://ik.imagekit.io/16zqnfdfuhh/llamazon/checkout.png?updatedAt=1628191906481)|

|SignUp Page|Orders Page|
|-----|-----|
|![signup](https://ik.imagekit.io/16zqnfdfuhh/llamazon/auth.png?updatedAt=1628191900912)|![orders](https://ik.imagekit.io/16zqnfdfuhh/llamazon/Orders.png?updatedAt=1628191912097)|

## How to run this project

- Clone Repo 
```gh repo clone liitcode/Llamazon```

- Install NPM packages
```npm install```

- Add .env file 
 > Firebase Configurations ->
```Env
 REACT_APP_APIKEY =
 REACT_APP_AUTHDOMAIN  = 
 REACT_APP_PROJECTID  =  
 REACT_APP_STORAGEBUCKET = 
 REACT_APP_SENDERID = 
 REACT_APP_ID = 
```
 > Stripe Secret Key ->
```
 STRIPE_SECRET =     
```

- Run the Project

> development
```npm run dev```
> production
```npm run prod```


## About The Project

- Llamazon is a simple clone of amazon. 


## Project Features

- Used React, Redux-thunk for Login, Signup, Add-To-Cart and other core features.
- Used Redux Persist for effective state management.
- Used Firebase for Auth, Firestore DB.
- Stripe Integration for seamless payments.
- Serverless netlify lambda function for third-party interactions.



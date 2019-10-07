# ZEAL INDONESIA

* Database API-Schema
### Auth

Method | endpoint       | Description
------ | -------------- | --------------------------
POST   | `/users/register` | register with new user data
POST   | `/users/login` | login with user data


### Users

Method | endpoint     | Description
------ | ------------ | -----------
GET    | `/users/user`     | Get All
GET    | `/users/user/:id` | get by:id
PUT    | `/users/user/:id` | update one

### Product

Method | endpoint     | Description
------ | ------------ | -----------
GET    | `/products/product`     | Get All
GET    | `/products/product/:id` | get by:id
PUT    | `/products/product/:id` | update one
POST    | `/products/product/:id` | add new product

### Category

Method | endpoint     | Description
------ | ------------ | -----------
GET    | `/categories/category`     | Get All
GET    | `/categories/category/:id` | get by:id
PUT    | `/categories/category/:id` | update one
POST    | `/categories/category/:id` | add new category

### Details Product

Method | endpoint     | Description
------ | ------------ | -----------
GET    | `/details/detail`     | Get All
GET    | `/details/detail/:id` | get by:id
PUT    | `/details/detail/:id` | update one
POST    | `/details/detail/:id` | add new product detail
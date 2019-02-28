<h1 align="center">
  Story book project
</h1>


## 🍔 Install project

### 1) Create database
Fist of all you need create database in MySql
For this purpose run following command
    `mysql -u <USER_NAME> -p` press `Enter` 
and add you password
    
After that you will mysql prompt:
    
    `mysql>`

Run next command:    
    
```CREATE database contacts_book; ```

and press `Ctr+Z`

### 2) Update you username and password in properties file
go to `src/main/resources/application.properties`
and edit
```
spring.datasource.username = <USER_NAME>
spring.datasource.password = <PASSWORD>
```
   
Open project in you favorite IDE and run it.
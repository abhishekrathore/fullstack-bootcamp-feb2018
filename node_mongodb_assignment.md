### Node-MongoDB Assignment Set

1. Create a MongoDB database with collections  person, country

2. Person should have all these fields in the profile :
    * First Name
    * Last Name
    * Age
    * Gender
    * Country
    * Created At (time when profile was created)

3. Country should have all these fields in the profile :
    * Name
    * ISO code

4. Create 2 APIs/Endpoints on Server with path "/person","/country"
    * Create a Simple HTML form to submit person name. /person should return you complete data of person whose name you have sent in API.(You can use old template of random user profile to show this data).
    * /country should return you complete data of the country name you have posted (i.e. you will send ISO code of Country with request)

5. Create a Simple HTML form to submit user data. This user data should be stored in MongoDB person collection. This form must also have a dropdown list of all countries availble from country collection.
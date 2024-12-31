
export const author = {
    name:"author",
    type:"document",
    title:"Author",
    fields:[
       
         {   name:"name",
            type:"string",
            title:"Name",},
       
       
          {  name:"image",
            type:"image",
            title:"Image",
            options:{
                hotspot:true
            },
        },
     
           { name:"bio",
            type:"text",
            title:"Bio",
        },
    ]
}
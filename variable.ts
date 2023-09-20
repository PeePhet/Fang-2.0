import { useMemo } from "react";




export const  Variable = ()=>{
        const Quiz_Data = useMemo(()=>{

                const onechap = [
                    { 
                        title : 'What is the primary goal of machine learning? 1' ,
                        choise1 : 'To mimic human intelligence' ,
                        choise2 : 'To automate repetitive tasks' ,
                        choise3 : 'To find patterns in data and make predictions' ,
                        choise4 : 'To perform complex calculations' 
            },
            { 
                title : 'What is the primary goal of machine learning?  2' ,
                choise1 : 'To mimic human intelligence 2' ,
                choise2 : 'To automate repetitive tasks 2' ,
                choise3 : 'To find patterns in data and make predictions 2' ,
                choise4 : 'To perform complex calculations 2' 
    },
    { 
        title : 'What is the primary goal of machine learning? 3 ' ,
        choise1 : 'To mimic human intelligence 3' ,
        choise2 : 'To automate repetitive tasks 3' ,
        choise3 : 'To find patterns in data and make predictions 3' ,
        choise4 : 'To perform complex calculations 3' 
},
{ 
    title : 'What is the primary goal of machine learning?  4' ,
    choise1 : 'To mimic human intelligence 4' ,
    choise2 : 'To automate repetitive tasks 4' ,
    choise3 : 'To find patterns in data and make predictions 4' ,
    choise4 : 'To perform complex calculations 4' 
},
{ 
    title : 'What is the primary goal of machine learning? 5' ,
    choise1 : 'To mimic human intelligence5' ,
    choise2 : 'To automate repetitive tasks5' ,
    choise3 : 'To find patterns in data and make predictions5' ,
    choise4 : 'To perform complex calculations5' 
},

        ]
            return onechap

        }
        ,[])

        return Quiz_Data
}
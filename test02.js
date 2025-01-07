function task1()
{
return new Promise((resolve, reject) => {
    setTimeout(() =>
    {
        task_one_is_done = true;

        if(task_one_is_done)
        {
            resolve("Task 1 is completed successfully");
        }
        else
        {
            reject("Task 1 is not completed successfully");
        }
    }, 1000);
})
}

function task2()
{
return new Promise((resolve, reject) => 
    {
        setTimeout(() => {
            task_two_is_done = true
            if(task_two_is_done)
            {
                resolve("Task 2 is completed successfully");
            }
            else
            {
                reject("Task 2 is not completed successfully");
            }
        }, 1500);
    })
}

function task3()
{
return new Promise((resolve, reject) =>
{
    setTimeout(() =>{
        task_tree_is_done = true;
        if(task_tree_is_done)
        {
            resolve("Task 3 is completed successfully");
        }
        else
        {
            reject("Task 3 is not completed successfully");
            }
        }, 2000);
    });
}

function task4()
{
    return new Promise((resolve, reject) => 
        {
            setTimeout(() => {
                task_fout_is_done = false;
                if(task_fout_is_done)
                {
                    resolve("Task 4 is completed successfully");
                }
                else
                {
                    reject("Task 4 is not completed successfully");
                }
            }, 2500)
        });
}

async function multiple_task() {
    
    try {
        const task1_result = await task1();
        console.log(task1_result);

        const task2_result = await task2();
        console.log(task2_result);

        const task3_result = await task3();
        console.log(task3_result);

        const task4_result = await task4();
        console.log(task4_result);
    } catch (error) {
        console.log(error);
    }
}


multiple_task();

// task1()
//     .then(wew => 
//         {
//             console.log(wew); 
//             return task2();
//         })
//     .catch(err =>
//         {
//             throw err;
//         })
//     .then(wew => 
//         {
//             console.log(wew); 
//             return task3();
//         })
//     .then(wew => 
//         {
//             console.log(wew); 
//             return task4();
//         })
//     .then(wew => 
//         {
//             console.log(wew); 
//             console.log("All tasks are completed successfully");
//         })
//     .catch(err => console.log(err));

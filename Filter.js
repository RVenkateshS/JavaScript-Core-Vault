const programming = ["js","py", "java","rb","cpp"]

// const value = programming.forEach( (items)=>{
//  console.log(items);
//  return items;
 
// })

// console.log(value);

// forEach doesn't return anything

                                 //-------------------------||-------------------------------//


// Filter :

// const nums = [1,2,3,4,5,6,7,8,9,10]

// const result1 = nums.filter( (num)=> num >4)   // Filter Returns the values which stisfies the condition
//                                                // if using "{}" then" return " must be used 
//                                                // otherwise an empty arry will be given back
// console.log(result1);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userbooks = books.filter((bk)=>{
         return bk.genre == 'History'
  })

  console.log(" Books having history genre:");
  console.log(userbooks);

  const userbooks1 = books.filter((bk)=>{
         return bk.publish >= 1989 
  })
  console.log(" Books published after 1989:");
  console.log(userbooks1);

const userbooks2 = books.filter((bk)=>{
         return bk.publish >= 1989 && bk.genre == 'History' 
  })
  console.log(" Books published after 1989 Having genre History :");
  console.log(userbooks2);

  
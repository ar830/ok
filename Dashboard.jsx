// PrivateRoute.js
import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './Dashboard.css';



async function getcategory() {
  const res = await fetch("http://localhost:3005/api/user/getpurchasedetails");
  const data = await res.json();
  return data.products;
}

// async function Dashboard() {
  function Dashboard() {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getcategory();
          setProducts(data);
          console.log('Products:', data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);




  //  const temp = [{"purchase_id":1,"product_id":1,"source_id":1,"quantity":10,"total_price":"100.50","purchase_date":"2024-04-17T03:30:00.000Z","edited":0,"edit_date":"2024-04-17T11:35:19.000Z"},{"purchase_id":4,"product_id":1,"source_id":1,"quantity":10,"total_price":"150.50","purchase_date":"2024-04-17T03:30:00.000Z","edited":0,"edit_date":"2024-04-22T08:42:25.000Z"},{"purchase_id":2,"product_id":2,"source_id":2,"quantity":5,"total_price":"50.25","purchase_date":"2024-04-16T05:00:00.000Z","edited":0,"edit_date":"2024-04-17T11:35:19.000Z"},{"purchase_id":5,"product_id":2,"source_id":2,"quantity":5,"total_price":"60.25","purchase_date":"2024-04-16T05:00:00.000Z","edited":0,"edit_date":"2024-04-22T08:42:25.000Z"},{"purchase_id":3,"product_id":3,"source_id":1,"quantity":8,"total_price":"80.80","purchase_date":"2024-04-15T09:15:00.000Z","edited":0,"edit_date":"2024-04-17T11:35:19.000Z"},{"purchase_id":6,"product_id":3,"source_id":1,"quantity":8,"total_price":"75.80","purchase_date":"2024-04-15T09:15:00.000Z","edited":0,"edit_date":"2024-04-22T08:42:25.000Z"}]

  //  const rest =  await getcategory();
  //   await setCategory(rest);    

  //  useEffect(()=> {
  //  const getcategory = async () =>{
  //     const res =  await fetch('http://localhost:3005/api/user/getpurchasedetails');
  //     const getdata =  res.products;
  //     setCategory(getdata);
  //     console.log(getdata);
  //  }
  //  getcategory();
  // },[]);


  //      fetchData();
  // }, []);
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //     const fetchData = async () => {
  //         try {
  //             const response = await fetch('http://localhost:3005/api/user/getpurchasedetails');
  //             if (!response.ok) {
  //                 throw new Error(`Error fetching data: ${response.statusText}`);
  //             }
  //             const data = await response.json();
  //             setData(data);
  //         } catch (error) {
  //             console.error('Error fetching data:', error);
  //         }
  // };

  //     fetchData();
  // }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>purchase_id</th>
            <th>product_id</th>
            <th>source_id</th>
            <th>quantity</th>
            <th>total_price</th>
            <th>purchase_date</th>
            <th>edited</th>
            <th>edit_date</th>
          </tr>
        </thead>
        <tbody>

          {

            products?.map((getcate) => (
              <tr key={getcate.purchase_id}>



                <td>{getcate.purchase_id}</td>

                <td> {getcate.product_id}</td>
                <td> {getcate.source_id}</td>
                <td> {getcate.quantity}</td>
                <td> {getcate.total_price}</td>
                <td> {getcate.purchase_date}</td>
                <td> {getcate.edited}</td>
                <td> {getcate.edit_date}</td>



              </tr>


            )


            )

          }


        </tbody>



      </table>
    </div>
  );
}

// const getcategory = async () =>{
//   const res =  await fetch('http://localhost:3005/api/user/getpurchasedetails');
//   console.log(res.products);
//   return res.products;
// setCategory(getdata);
// console.log(getdata);
//  }







export default Dashboard;
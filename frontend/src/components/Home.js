import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import ChildForm from './ChildForm';

function Home()  {
    let history = useHistory();

    const [students, setStudents] = useState(
      [
        {
        first_name: "string",
        last_name: "string",
        grade: "First",
        address: "string",
        background: "string",
        status: "string",
        age: "string",
        insurance: true,
        expiration_date: "string",
        birth_certificate: true ,
        special_needs: "string",
        representative_name: "string",
        representative_contact: "string"
      },
      {
        first_name: "string",
        last_name: "string",
        grade: "First",
        address: "string",
        background: "string",
        status: "string",
        age: "string",
        insurance: true,
        expiration_date: "string",
        birth_certificate: true ,
        special_needs: "string",
        representative_name: "string",
        representative_contact: "string"
      }
      ]
    ) 


    // This function generates the table head using the key parts of the array.

    function generateTableHead(){
        let data = Object.keys(students[0]); 
        let table = document.getElementsByName("table");
        let thead = table[0].createTHead();
        let row = thead.insertRow();
        for (let key of data) {
            let th = document.createElement("th");
            let text = document.createTextNode(key);
            th.appendChild(text);
            row.appendChild(th);
        }
    }


    // This function generates a table based on data based on the data recieved from the server. 

    function generateTable(data){

        const deleteChild = child => {
            axiosWithAuth()
            .delete(`/api/admins/${child}`/students)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
            history.push("/protected/home")
        };

        let table = document.getElementsByName("table");
        for (let element of data) {
            let row = table[0].insertRow();
            for (let key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
            }
            let deleteButton = row.insertCell();
            let deleteLink = document.createElement('button');
            let deleteText = document.createTextNode('Delete')
            deleteButton.appendChild(deleteLink);
            deleteLink.appendChild(deleteText)
            deleteLink.setAttribute('onClick', `{deleteChild(${element.id})}`)
        }
    }


    // As data is updated by student form, useEffect recalls the data from the server and then rerenders the page with the new state.

    useEffect(() => {

        axiosWithAuth()
        .get('/students')
        .then(res => {
            setStudents({
                ...res.data
            })
        })
        .catch(err => console.log(err));

           
        generateTableHead()
        generateTable(students)

    }, [])

    // This updates the local state before sending it over to handleSubmit and making a post request. The post request is non-functional due to a CORS issue with the backend. To resolve this issue in the future, the backend would need to work with the front end developer to resolve the issues on the backend. 

    function addNewChild(e){
        const newChild = {
            first_name: e.first_name,
            last_name: e.last_name,
            grade: "first",
            address: "111",
            background: "111",
            status: "111",
            age: "12",
            insurance: true,
            expiration_date: "121212",
            birth_certificate: true ,
            special_needs: "0",
            representative_name: "0",
            representative_contact: "0",
        }
        handleSubmit(newChild)
    }

    function handleSubmit(values){
    console.log("Submitting...", values)
    axiosWithAuth()
        .post(`/admins/${1}/students`, values)
        .then(res => {
            setStudents(...values)
            console.log(res)
        })
        .catch(error => console.log(error.response))
    }

    return (
        <div className="home-container">
            <h1>Ghana Orphanage School</h1>
            <ChildForm addNewChild={addNewChild} />
            <div>
                <h2>Students</h2>
                <table name="table">
                    
                </table>
            </div>
        </div>
    )
}

export default Home;
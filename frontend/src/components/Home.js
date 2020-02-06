import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import ChildForm from './ChildForm';


        

const Home = props => {

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
      }
      ]
    ) 



    function generateTableHead(data){
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

    function generateTable(data){
        let table = document.getElementsByName("table");
        for (let element of data) {
            let row = table[0].insertRow();
            for (let key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
            cell.setAttribute('onClick', `{deleteChild(${element})}')`)
            }
        }
    }

    let data = Object.keys(students);
    

    const deleteChild = child => {
    // make a delete request to delete this color
        axiosWithAuth()
        .delete(`/api/admins/${child.id}`/students)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
        props.history.push("/protected/home")
    };


    useEffect(() => {

        axiosWithAuth()
        .get('/students')
        .then(res => {
            setStudents({
                ...res.data
            })
        })
        .catch(err => console.log(err));
        
        generateTableHead(data)
        generateTable(students)
    }, [])

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
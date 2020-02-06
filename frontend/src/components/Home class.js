import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import ChildForm from './ChildForm';

function generateTableHead(table, data){
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data){
    for (let element of data) {
        let row = table.insertRow();
        for (let key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
        }
    }
}
        

class Home extends React.Component {
    state = {
        students:[
            {   first_name: "string",
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
                representative_contact: "string"}
        ]
    };

    componentDidMount() {
        this.getData();
        let table = document.querySelector("table");
        let students = (this.state.students);
        let data = Object.keys(students[0]);
        generateTableHead(table, data);
        generateTable(table, students);
    }

    componentDidUpdate(){
        this.getData();
        let table = document.querySelector("table");
        let students = (this.state.students);
        generateTable(table, students);
    }

    getData = () => {
        axiosWithAuth()
        .get('/students')
        .then(res => {
            this.setState({
                students: [...res.data]
            })
        })
        .catch(err => console.log(err));
    };
        

    render(){

        function addNewChild(e){
            const newChild = {
                first_name: e.first_name,
                last_name: e.last_name,
                grade: "",
                address: "",
                background: "",
                status: "",
                age: "",
                insurance: true,
                expiration_date: "",
                birth_certificate: true ,
                special_needs: "",
                representative_name: "",
                representative_contact: "",
            }
            handleSubmit(newChild)
        }

        function handleSubmit(values){
        console.log("Submitting...", values)
        axiosWithAuth()
            .post(`/admins/${1}/students`, values)
            .catch(error => console.log(error.response))
        }

        return (
            <div className="home-container">
                <h1>Ghana Orphanage School</h1>
                <ChildForm addNewChild={addNewChild} />
                <div>
                    <h2>Students</h2>
                    <table>

                    </table>
                </div>
            </div>
        )
    }
}

export default Home;
<template>
  <div>
      <h4>Admin panel</h4>
      <div class="row">
        <div class="col s12 m4 l3">
          <!-- manage employees -->
          <div class="employees-wrapper">
            <h5 class="left-align">Manage employees</h5>
            <p class="left-align">Here you can add or remove employees from the database. Be careful, once you hit the delete icon, the data of the employee will be deleted.</p>

            <!-- list employees here -->
            <div v-if="employees.length">
              <ul>
                <li v-for="employee in employees" :key="employee.email" class="left-align">
                  {{ employee.firstName }} {{ employee.lastName }}
                  <i class="material-icons close-trigger red-text text-lighten-1"
                   @click="removeEmployee(employee.email)">
                   close
                   </i>
                </li>
              </ul>          
            </div>

            <button class="waves-effect waves-light btn-small teal lighten-3 left" @click="toggleAddEmployeeModal">Add</button>
          </div>

          <!-- update employee data -->
          <div class="employees-wrapper">
            <h5 class="left-align">Update employee data</h5>
            <p class="left-align">Select the employee and the data field you want to update below.</p>
              
            <select id="select-employee" v-model="selectedEmployee">
              <option v-for="(employee, index) in employees" :value="employee.email" :key="index">
                {{ employee.firstName }} {{ employee.lastName }}
              </option>
            </select>

            <select id="select-field" v-model="selectedField">
              <option v-for="(field, index) in fields" :value="field.key" :key="index">
                {{ field.name }}
              </option>
            </select>
          
            <div class="row">
              <div class="input-field col s12">
                <input id="new_value" v-model="newValue" type="text" class="validate" required>
                <label for="new_value">New value</label>
              </div>
            </div>
             
            <button class="waves-effect waves-light btn-small teal lighten-3 left" @click="updateEmployeeData(selectedEmployee, selectedField, newValue)">Update data</button>
          </div>
        </div>

        <!-- track appointments for the day -->

        <div class="col s12 m8 l9">
          <div class="employees-wrapper">
            <h5 class="left-align"><b>Today</b>'s appointments</h5>
            <table class="striped responsive-table" v-if="nextReservations.length > 0 && hasAppointmentForToday">
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Reservation code</th>
                    <th>Datetime</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(reservation, index) in sortedReservations" :key="index">
                  <td v-if="new Date(Date.parse(reservation.date)).getDate() == new Date(Date.now()).getDate()">{{reservation.name}}</td>
                  <td v-if="new Date(Date.parse(reservation.date)).getDate() == new Date(Date.now()).getDate()">{{reservation.phone}}</td>
                  <td v-if="new Date(Date.parse(reservation.date)).getDate() == new Date(Date.now()).getDate()">{{reservation.code}}</td>
                  <td v-if="new Date(Date.parse(reservation.date)).getDate() == new Date(Date.now()).getDate()"><b>{{reservation.date.slice(0,reservation.date.lastIndexOf(':'))}}</b></td>
                  <td v-if="new Date(Date.parse(reservation.date)).getDate() == new Date(Date.now()).getDate()">
                    <button v-if="new Date(Date.parse(reservation.date)).getDate() == new Date(Date.now()).getDate()" class="waves-effect waves-light btn-small red lighten-2" @click="cancelReservation(reservation)">Cancel</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <h5 class="left-align" v-else>Currently there are no reservations for the day!</h5>
          </div>
        </div>    

        <!-- track appointments -->
        <div class="col s12 m8 l9">
          <div class="employees-wrapper">
            <h5 class="left-align">Track <b>all</b> appointments</h5>
            <table class="striped responsive-table" v-if="nextReservations.length > 0">
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Reservation code</th>
                    <th>Datetime</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(reservation, index) in sortedReservations" :key="index">
                  <td>{{reservation.name}}</td>
                  <td>{{reservation.phone}}</td>
                  <td>{{reservation.code}}</td>
                  <td><b>{{reservation.date.slice(0,reservation.date.lastIndexOf(':'))}}</b></td>
                  <td>
                    <button class="waves-effect waves-light btn-small red lighten-2" @click="cancelReservation(reservation)">Cancel</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <h5 class="left-align" v-else>Currently there are no reservations!</h5>
          </div>
        </div>
      </div>

<!-- ===== Add Employee Modal ===== -->
    <transition name="fade">
      <div class="modal-overlay1" v-if="showAddEmployeeModal" @click="toggleAddEmployeeModal"></div>
    </transition>
    <transition name="slide">
      <div class="custom-modal add-employee-modal" v-if="showAddEmployeeModal">
        <h5>{{ title }}</h5>
        <p>{{ subTitle }}</p>
        <AddEmployeeForm @update-parent="toggleAddEmployeeModal"/>
        <i class="material-icons close-trigger grey-text text-lighten-1" @click="toggleAddEmployeeModal">close</i>
      </div>
    </transition>

  </div>
</template>

<script>
import firebase from 'firebase/app'
import AddEmployeeForm from '../components/forms/AddEmployeeForm'
import { mapState, mapActions } from 'vuex'

export default {
  data(){
    return{
      showAddEmployeeModal: false,
      title: 'Add barber',
      subTitle: 'Enter data below',
      employees: [],
      selectedEmployee: '',
      selectedField: '',
      newValue: '',
      // might change later
      fields: [{name: 'First name', key: 'firstName'},{name: 'Last Name', key: 'lastName'},{name: 'E-mail', key: 'email'},{name: 'Phone', key: 'phone'}],
    }
  },
  components: {
    AddEmployeeForm
  },
  computed: {
    db(){
      return firebase.firestore();
    },
    ...mapState(['nextReservations']),
    hasAppointmentForToday: function(){
      return this.nextReservations.some(reservation => {
        let reservationDate = new Date(Date.parse(reservation.date)).getDate();
        let currentDate = new Date(Date.now()).getDate();
        return reservationDate === currentDate; 
      }); 
    },
    sortedReservations: function(){
    let array = this.nextReservations.sort((first, second) => {
      if (first.date < second.date) {
        return -1;
      }
      if (first.date > second.date) {
        return 1;
      }
    });
    console.log(array);
    return array;
    },
  },
  methods: {
    ...mapActions([
      'cancel',
      'getNextReservations'
    ]),
    toggleAddEmployeeModal: function(){
      this.showAddEmployeeModal = !this.showAddEmployeeModal
    },
    getEmployees: function(){
      this.db.collection('employees').onSnapshot(snapshot => {
        let employeesArray = [];

        snapshot.forEach(doc => {
          let employee = doc.data();
          employeesArray.push(employee);
        })

        this.employees = employeesArray;
        // console.log(employeesArray);
      })
    },
    updateEmployeeData: function(employee, field, newValue){
      this.db.collection("employees").doc(employee).update({
        // enhanced object literal ES6
        [`${field}`]: newValue
      }).then(() => {
        // clear selects and field
        const newValue = document.querySelector('#new_value');
        const selectEmployee = document.querySelector('#select-employee');
        const selectField = document.querySelector('#select-field');

        newValue.value = '';
        selectEmployee.value = '';
        selectField.value = '';
      });
    },
    removeEmployee: function(key){
      // console.log(key);

      this.db.collection("employees").doc(key).delete().then(() => {
          console.log("Document successfully deleted!");
      }).catch((error) => {
          console.error("Error removing document: ", error);
      });
    },
    cancelReservation(booking){
      this.cancel(booking);
    }
  },
  created(){
    this.getNextReservations();
  },
  beforeMount(){
    this.getEmployees();
  }
}
</script>

<style lang="scss" scoped>
.employees-wrapper{
  background-color: white;
  display: flex;
  align-content: center;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 15px;
  padding: 15px 25px !important;
  border-radius: 15px;
  -webkit-box-shadow: 5px 5px 18px -2px rgba(0,0,0,0.15); 
  box-shadow: 5px 5px 18px -2px rgba(0,0,0,0.15);

  button{
    width: fit-content;
  }

  ul{
    margin: 15px 0;
  }
}

.add-employee-modal{
  max-width: 475px;
}

.material-icons{
  cursor: pointer;
  font-size: inherit;
}

select{
  margin: 15px 0;
  display: block;
  width: 100%;
  height: auto;
  border-radius: 5px;
}

</style>
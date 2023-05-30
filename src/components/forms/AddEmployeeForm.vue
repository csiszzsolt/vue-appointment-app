<template>
   <div class="row">
    <form id="employee-form" class="col s12" @submit.prevent="addEmployee">
      <div class="row">
        <div class="input-field col s6">
          <input id="first_name" type="text" class="validate" required>
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate" required>
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="phone" type="tel" class="validate" pattern="\d*" title="Only numbers allowed" required>
          <label for="phone">Telephone</label>
        </div>
        <div class="input-field col s6 center-align">
            <input id="employee-email" type="email" class="validate" required>
            <label for="employee-email">E-mail</label>
        </div>
      </div>
      <!-- <div class="row">
        <div class="file-field col s12 input-field">
        <div class="btn-small grey lighten-1">
            <span>File</span>
            <input type="file" required>
        </div>
        <div class="file-path-wrapper">
            <input class="file-path validate" type="text">
        </div>
        </div>
      </div> -->
      <button class="waves-effect waves-light btn-small left teal lighten-3">{{ buttonText }}</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase/app'

export default {
  data(){
      return{
          buttonText: 'Add'
      }
  },
  methods: {
    handleUpdate: function() {
    this.$emit('update-parent');
    // console.log('emitting');
    },
    addEmployee: function(){
      const addEmployeeForm = document.querySelector('#employee-form');
      // firestore
      let db = firebase.firestore();
      // employee information
      const firstName = addEmployeeForm['first_name'].value;
      const lastName = addEmployeeForm['last_name'].value;
      const email = addEmployeeForm['employee-email'].value;
      const phone = addEmployeeForm['phone'].value;

      db.collection('employees').doc(email).set({
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: phone
      })
      .then(() => {
          console.log("Document written");
          // clear form after sign-up
          addEmployeeForm.reset();
          // close modal
          this.handleUpdate();
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });          
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-small{
    line-height: 32.4px !important;
    height: 32.4px !important;
}

.file-field{
    display: flex;
    align-items: center;
    margin-bottom: 15px !important;

    .file-path-wrapper{
        width: 100%;
    }
}
</style>
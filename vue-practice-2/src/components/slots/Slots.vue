<template>
  <div>
    <!-- It is used to pass html code in between component tag -->
    <slot-basics>
      <h3 slot="title">I am the slot title</h3>
      <p slot="text">I am the p text</p>
      <ul>
        <li>test</li>
      </ul>
      <!-- The above HTML code is passing to form-helper component -->
    </slot-basics>
    <form-helper>
      <div slot="form-header">
        <h5>Add user</h5>
      </div>
      <div slot="form-fields">
        <div>
          <div>
            <label for="">name</label>
            <input type="text" v-model="formData.userName" />
          </div>
          <div>
            <label for="">surName</label>
            <input type="text" v-model.lazy="formData.surName" />
            <!--
                v-model.lazy : it update value after lose the focus on input
              -->
          </div>
          <div>
            <label for="">mobile number</label>
            <input type="text" v-model="formData.number" />
          </div>
          <div>
            <!-- Vue do's when checkbox is clicked nameCheckboxes array will get the checkbox vlaue  -->

            <label for="">sriman</label>
            <input
              type="text"
              value="sriman"
              v-model="formData.nameCheckboxes"
            />
            <label for="">Manu</label>
            <input type="text" value="Manu" v-model="formData.nameCheckboxes" />
            <label for="">mahesh</label>
            <input
              type="text"
              value="mahesh"
              v-model="formData.nameCheckboxes"
            />
            <label for="">nagaraju</label>
            <input
              type="text"
              value="nagaraju"
              v-model="formData.nameCheckboxes"
            />
          </div>
          <div>
            <select name="" id="" v-model="formData.selectValue">
              <option value="manu">manu</option>
              <option value="sriman">sriman</option>
              <option value="sri">sri</option>
            </select>
          </div>
        </div>
      </div>
      <div slot="form-footer">
        <button @click.prevent="submithandulr">Submit User</button>
      </div>
    </form-helper>
  </div>
</template>
  
  <script>
import FormHelper from "./FormHelper.vue";
import SlotBasics from "./SlotBasics.vue";

export default {
  components: { FormHelper, SlotBasics },
  data() {
    return {
      formData: {
        userName: "",
        surName: "",
        number: "",
        selectValue: "",
        nameCheckboxes: [], // automatic push value form vue when checkboc is clicked
      },
    };
  },
  methods: {
    submithandulr(event) {
      this.$http
        .post("https://fakestoreapi.com/products", {
          title: "test product",
          price: 13.5,
          description: "lorem ipsum set",
          image: "https://i.pravatar.cc",
          category: "electronic",
        })
        .then((res) => console.log(res));
    },
  },
};
</script>
  
  <style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
  
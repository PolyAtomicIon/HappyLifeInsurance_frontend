<template>
  <v-container fluid>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
            <v-card class="elevation-2">
                <v-toolbar dark color="primary-color">
                    <v-toolbar-title>Register form</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-form>
                        <v-text-field
                            label="E-mail"
                            prepend-icon="person"
                            v-model="email"
                            :error-messages="emailErrors"
                            required
                            @input="$v.email.$touch()"
                            @blur="$v.email.$touch()"
                        ></v-text-field>

                        <v-text-field
                            label="Password"
                            prepend-icon="lock"
                            v-model="password"
                            :error-messages="passwordErrors"
                            required
                            type="password"
                            @input="$v.password.$touch()"
                            @blur="$v.password.$touch()"
                        ></v-text-field>

                        <v-text-field
                            label="Password"
                            prepend-icon="lock"
                            type="password"
                            v-model="password2"
                            :error-messages="passwordErrors"
                            required
                        ></v-text-field>

                    </v-form>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="white primary-color--text" text @click="$router.push('login')">Login instead</v-btn>
                    <v-btn class="primary-color white--text" @click="submit">Register</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email, password } from 'vuelidate/lib/validators'
  import axios from 'axios'
  import { mapGetters } from 'vuex'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      password: { required, password },
      select: { required },
    },

    data: () => ({
      name: '',
      email: '',
      password: '',
      password2: '',
      select: null,
    }),

    computed: {
      ...mapGetters(['server_url']),
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
      passwordErrors () {
        const errors = []
        if( this.password !== this.password2 ){
          // errors.push('Passwords not equal')
          return true;
        }
        // !this.$v.password.password && errors.push('Must be valid password')
        // !this.$v.password.required && errors.push('Password is required')
        return errors
      },
    },

    methods: {
      submit () {

        let creds = {
          email: this.email,
          password: this.password,
          name: 'Bekzat',
          surname: 'Yernat'
        }
        axios
          .post(this.server_url + "register", creds,
            {
              headers: {
                'Access-Control-Allow-Origin' : '*',
              }
            }
          )
          .then(response => {
            console.log(response)
            this.$router.push('login')
          })
          .catch(error => {
              console.log("ERRRR:: ", error);
          });

        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
          },
    },
  }
</script>
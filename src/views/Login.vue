<template>
  <v-container fluid >
      <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
          <v-card class="elevation-2">
              <v-toolbar dark color="primary-color">
                  <v-toolbar-title>Login form</v-toolbar-title>
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
                          required
                          type="password"
                      ></v-text-field>
                  </v-form>
              </v-card-text>

              <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn class="white" text @click="$router.push('register')">Register instead</v-btn>
                  <v-btn class="primary-color white--text" @click="submit">Login</v-btn>
              </v-card-actions>
          </v-card>
      </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email, password } from 'vuelidate/lib/validators'
  import { mapGetters, mapMutations } from 'vuex'
  import axios from 'axios'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      password: { required, password },
    },

    data: () => ({
      name: '',
      email: '',
      password: '',
    }),

    computed: {
      ...mapGetters(['server_url']),
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
      passwordErrors () {
        const errors = []
        // !this.$v.password.password && errors.push('Must be valid password')
        // !this.$v.password.required && errors.push('Password is required')
        return errors
      },
    },
    mounted() {
      // this.setProfile({});
    },
    methods: {
      ...mapMutations(['setProfile', 'setToken']),

      submit () {
        // if(this.email === '' || this.password === '')
        //   return

        let creds = {
          email: this.email,
          password: this.password,
        }
        axios
          .post(this.server_url + "login", creds,
            // {
            //   headers: {
            //     'Access-Control-Allow-Origin' : '*',
            //   }
            // }
          )
          .then(response => {
            console.log(response);
            this.setToken(true);
            // this.$router.push('profile')
            this.$router.push('profile/permissions')
          })
          .catch(error => {
              console.log("ERRRR:: ", error.message);
          });

        this.$v.$touch()
      
      },
      clear () {
        this.$v.$reset()
        this.email = ''
        this.password = ''
      },
    },
  }
</script>
<template>
  <v-container fluid>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
            <v-card class="elevation-2">
                <v-toolbar dark color="deep-purple">
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
                            @input="$v.password.$touch()"
                            @blur="$v.password.$touch()"
                        ></v-text-field>

                        <v-text-field
                            label="Password"
                            prepend-icon="lock"
                            v-model="password2"
                            :error-messages="passwordErrors"
                            required
                            @input="$v.password.$touch()"
                            @blur="$v.password.$touch()"
                        ></v-text-field>

                    </v-form>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="white deep-purple--text" text @click="$router.push('login')">Login instead</v-btn>
                    <v-btn class="deep-purple white--text" @click="submit">Register</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email, password } from 'vuelidate/lib/validators'

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
        // !this.$v.password.password && errors.push('Must be valid password')
        // !this.$v.password.required && errors.push('Password is required')
        return errors
      },
    },

    methods: {
      submit () {
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
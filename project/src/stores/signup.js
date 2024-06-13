import { defineStore } from 'pinia';
import { supabase } from '../supabaseClient.js';

export const useSignUpStore = defineStore('signup', {
  state: () => ({}),
  actions: {
    async signUp(email, username, password) {
      const { data: userData, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { username } }
      });
      if (error) {
        console.log(error);
        throw error;
      } else {
        await this.insertData(userData);
        return userData;
      }
    },
    async insertData(userData) {
      const { data: insertData, error: insertError } = await supabase
        .from('userInfo')
        .insert([
          { id: userData.user.id, email: userData.user.email, username: userData.user.user_metadata.username }
        ]);
      if (insertError) {
        console.log(insertError);
        throw insertError;
      } else {
        console.log(insertData);
      }
    }
  }
});
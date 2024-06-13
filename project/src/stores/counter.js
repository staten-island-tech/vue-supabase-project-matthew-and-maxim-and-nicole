import { defineStore } from 'pinia'
import supabase from '../supabaseClient';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
    id: '' 
  }),
  actions: {
    async getSavedItems(){ try{
      const { data: cart, error } = await supabase
          .from('cart')
          .select('item');
          if (error) throw error;
          this.itemList = cart.map(entry => entry.item);
        } catch(error) 
        {
          console.error( error.message);
        }
      },
      
      
      async addItem(item, userID) {
       /*  itemList.value.push(item);
        window.scrollTo(
          0,
          document.body.scrollHeight || document.documentElement.scrollHeight
        ); */
        // use insert rows
        try {
          const {data, error } = await supabase
          .from('cart')
          .insert([{ item: item.name, user_id: userID}]);
          if (error) throw error;
          this.itemList.push(item);
            window.scrollTo(
              0,
              document.body.scrollHeight || document.documentElement.scrollHeight );
        } catch (error) {
          console.error( error.message);        
      }
    },
      
      async removeItem(index) {
       /*  console.log(index);
        console.log(itemList.value[index]);
        itemList.value.splice(index, 1); */
        // use delete rows
        try {
          const itemToRemove = itemList.value[index];
        const {error } = await supabase
          .from('cart')
          .delete()
          .eq('item', itemToRemove);
        if (error) throw error;
        this.itemList.splice(index, 1);
        } catch(error) {
          console.error(error.message);
        }
      },
    },
});

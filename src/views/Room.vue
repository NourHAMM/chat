<template>
   <div>
     <v-navigation-drawer app permanent clipped color="grey lighten-4" >
         <v-list-item-title class="title">{{ room.name }}</v-list-item-title>
         <v-list-item-subtitle>Room</v-list-item-subtitle>
         <v-divider />

          <v-list nav>
        <v-list-item v-for="room in rooms" :key="room.id" :to="`/room/${room.id}`" >
          <v-list-item-content>
            <v-list-item-title>{{ room.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

     </v-navigation-drawer>
      <v-container >
        <div v-for="message in messages" :key="message.id">
          <p class="overline">{{message.author}} on {{message.createdAt.toLocaleString()}}</p>
          <p>{{message.text}}</p>
        </div>

      </v-container>
       <v-footer absolute color="grey lighten-4">
          <v-text-field  v-model="newMessage" color="success" label="New Message" @change="add" />
      <v-btn color="success" @click="add">Send</v-btn>
       </v-footer>
</div>
</template>

<script>

export default {
  name: "Room",
   data() {
    return {
      newMessage: '',
      room: { id:123, name:"The Room",createdAt: new Date()},
      rooms: [{id:1,name: "Amazing"},{id:2,name:"Other"}],
      messages: [{id:1, text:"First message", author:"Rodolfo Roman", createdAt: new Date()},
                 {id:1, text:"Second message", author:"Another Guy", createdAt: new Date() }
      ],
        }
},
methods: {
  add() {},
},
}

</script>


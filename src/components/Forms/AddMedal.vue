<script setup>
import { ref } from "vue";
import MedalForm from "./MedalForm.vue";
import placeholderData from "../../assets/json/medals_data.json";
const nbMedals = ref(1);
const countEl = ref();
const medalsForm = ref([]);

const submit = () => {
    const data = [];

    medalsForm.value.forEach((medalForm) => {
        data.push({
            type: parseInt(medalForm.type.value),
            athlete: medalForm.athlete.value,
            nationality: medalForm.nationality.value,
            event_name: medalForm.eventName.value,
            sport: medalForm.sport.value,
            datetime: medalForm.datetime.value,
            city: medalForm.city.value,
            description: medalForm.description.value,
            cover_url: medalForm.coverUrl.value,
            zone: parseInt(medalForm.zone.value),
        });
    });

    console.log(data);
    fetch(`${import.meta.env.OLYMPIC_WSS}/admin/medal`, {
        method: "POST",
        body: JSON.stringify(data),
        mode: "no-cors",
    });

    handleNbMedalChange();
};

const handleNbMedalChange = () => {
    nbMedals.value = 0;
    nbMedals.value = parseInt(countEl.value.value);
};
</script>

<template>
    <div class="Form AddMedal">
        <h3>Ajouter des médailles</h3>
        <label>Nombre de médailles à ajouter : </label>
        <input ref="countEl" type="number" min="1" max="3" :value="nbMedals" v-on:change="handleNbMedalChange" />
        <MedalForm v-for="num in nbMedals" :key="num" :idMedal="num" ref="medalsForm" :medal="placeholderData[Math.floor(Math.random() * placeholderData.length)]" />
        <br />
        <a class="submit" v-on:click="submit">Envoyer</a>
    </div>
</template>

<style scoped></style>

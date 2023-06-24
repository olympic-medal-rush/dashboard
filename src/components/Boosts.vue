<script setup>
import { ref } from "vue";

const iso = ref();
const type = ref();
const interval = ref();

const boostType = ref("");

const onSelectChange = () => {
    boostType.value = type.value.value;
};

const onSubmit = () => {
    const data = {
        iso: iso.value.value,
    };

    let endpoint = `${import.meta.env.OLYMPIC_WSS}/admin/buff/`;
    if (boostType.value === "vote_rate") {
        endpoint += "vote_rate";
        data["interval"] = parseFloat(interval.value.value);
    } else if (boostType.value === "pathfinding") endpoint += "pathfinding";
    console.log(data);
    fetch(endpoint, { method: "POST", body: JSON.stringify(data), mode: "no-cors" });
};
</script>

<template>
    <div class="Boosts">
        <h2>Boosts 🔥</h2>
        <div class="Boosts_Container">
            <div class="card">
                <h3>Déclencher un boost</h3>
                <form action="" method="post">
                    <label for="iso">ISO de l'équipe visée :</label>
                    <input ref="iso" id="iso" type="text" />
                    <br />
                    <label for="type">Type de boost :</label>
                    <select @input="onSelectChange" ref="type" id="type">
                        <option value="">Choisir un boost</option>
                        <option value="vote_rate">Vitesse de vote</option>
                        <option value="pathfinding">Pathfinding</option>
                    </select>
                    <br />
                    <div class="vote-rate" v-if="boostType === 'vote_rate'">
                        <label for="interval">Durée de vote (secondes) :</label>
                        <input ref="interval" id="interval" type="number" step=".1" />
                    </div>
                </form>
                <br />
                <a class="submit" @click="onSubmit">Envoyer</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.Boosts_Container {
    margin-top: 40px;
}
</style>

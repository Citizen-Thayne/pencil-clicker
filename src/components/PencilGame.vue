<template>
  <div>
    <section class="section">
      <div>Pencils: {{pencilCount}}</div>
      <button @click='createPencil'>Create Pencil</button>
    </section>

    <section class="section">Pencil Price: {{pencilPrice}}</section>

    <section class="section">
      <div>Money: {{moneyAmount}}</div>
      <button @click='sellPencil'
              :disabled='pencilCount < 1'>Sell Pencil</button>
    </section>

    <section class="section">
      <div>Sellers: {{sellerCount}}</div>
      <button @click='buySeller'
              :disabled='!canBuySeller'>Buy Seller</button>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapGetters, mapActions } from "vuex";

@Component({
  computed: {
    ...mapGetters([
      "pencilCount",
      "moneyAmount",
      "pencilPrice",
      "sellerCount",
      "canBuySeller"
    ])
  },
  methods: {
    ...mapActions(["createPencil"])
  }
})
export default class PencilGame extends Vue {
  created() {
    this.startSellers();
  }

  startSellers() {
    setInterval(() => this.$store.dispatch("workPencilSellers"), 1000);
  }

  sellPencil() {
    this.$store.dispatch("sellPencil");
  }
  buySeller() {
    this.$store.dispatch("buySeller");
  }
}
</script>

<style scoped>
.section {
  margin-bottom: 20px;
}
</style>



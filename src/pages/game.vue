<template>
  <v-container>
    <v-row align="center">
      <v-col>
        <v-text-field
          v-model="sizeX"
          label="Size X"
          type="number"
          @input="drawGrid"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          v-model="sizeY"
          label="Size Y"
          type="number"
          @input="drawGrid"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="black" v-for="(row, rowIndex) in grid" :key="rowIndex">
      <v-col v-for="(color, colIndex) in row" :key="colIndex">
        <div
          class="square"
          :class="{ blue: color === 'blue' }"
          @mouseover="toggleColor(rowIndex, colIndex)"
        ></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  setup() {
    const sizeX = ref(10);
    const sizeY = ref(10);
    const grid = reactive([]);

    const drawGrid = () => {
      grid.length = 0;
      for (let y = 0; y < sizeY.value; y++) {
        const row = [];
        for (let x = 0; x < sizeX.value; x++) {
          row.push("white");
        }
        grid.push(row);
      }
    };

    const toggleColor = (y, x) => {
      grid[y][x] = grid[y][x] === "white" ? "blue" : "white";
    };

    drawGrid();

    return {
      sizeX,
      sizeY,
      grid,
      drawGrid,
      toggleColor,
    };
  },
};
</script>

<style scoped>
.square {
  width: 36px;
  height: 36px;
  background-color: white;
  border: 1px solid #999;
}

.blue {
  background-color: blue;
}

.black {
  background-color: black;
}
</style>

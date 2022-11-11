<script>
export default {
  data() {
    return {
      previous: null,
      current: '',
      operator: null,
      operatorClicked: false,
    }
  },
  methods: {
    clear() {
      this.current = '';  
    },
 
    append(number) {
      if (this.operatorClicked) {
        this.current = '';
        this.operatorClicked = false;
      }
      this.current = `${this.current}${number}`;
    },
    dot() {
      if (this.current.indexOf('.') === -1) {
        this.append('.');
      }
    },
    setPrevious() {
      this.previous = this.current;
      this.operatorClicked = true;
    },
    divide() {
      this.operator = (a, b) => a / b;
      this.setPrevious();
    },
    times() {
      this.operator = (a, b) => a * b;
      this.setPrevious();
    },
    minus() {
      this.operator = (a, b) => a - b;
      this.setPrevious();
    },
    add() {
      this.operator = (a, b) => a + b;
      this.setPrevious();
    },
    equal() {
      this.current = `${this.operator(
        parseFloat(this.current), 
        parseFloat(this.previous)
      )}`;
      this.previous = null;
    }
  }
}
</script>
  
  <template >
   <div class="h-full w-full flex items-center justify-center">
           <div  class="w-[500px] ">
            <div class="flex w-full text-white pb-4  justify-between items-center ">
              <div class=" pl-2  text-3xl">
                  calc
              </div>
                 <div class="flex items-end mb-4 gap-1  ">
                  <p class="pr-2 text-xs uppercase">
                  theme
                  </p>
                  <div>
                    <div class="flex text-xs   px-1 pl-2  gap-3 mb-2 ">
                        <div  class="flex justify-center rounded-full h-4 w-4 cursor-pointer ">1</div>
                        <div  class="flex justify-center rounded-full h-4 w-4 cursor-pointer ">2</div>
                        <div  class="flex justify-center rounded-full h-4 w-4 cursor-pointer ">3</div>
                     </div>
                      <div class="flex bg-[#242d44] rounded-full px-2 py-1 gap-3" >
                            <router-link  to="/" activeClass="!rounded-full h-4 w-4 cursor-pointer bg-[#ef6a59]" class=" rounded-full h-4 w-4 cursor-pointer">
                            </router-link>
                            <router-link  to="/theme2" activeClass="!rounded-full h-4 w-4 cursor-pointer bg-[#ef6a59]" class=" rounded-full h-4 w-4 cursor-pointer">
                            </router-link>
                            <router-link to="/theme3" activeClass="!rounded-full h-4 w-4 cursor-pointer bg-[#ef6a59]" class=" rounded-full h-4 w-4 cursor-pointer">        
                            </router-link>
                        </div>
                  </div>
                  
                 </div>
           </div>   
           <div class=" text-white bg-[#181f32] relative text-5xl flex items-center justify-end pr-5  rounded-lg  my-4 h-32"> 
                <div class="">
                    {{current || '0'}} 
                </div> 
            </div>
    
               <div class="flex bg-[#242d44] rounded-lg items-center h-[450px] w-[500px] justify-center">
                  <div class="grid grid-cols-4  grid-rows-5 h-96 w-[450px] gap-4">
                      <div class="border bg-[#eae3db] flex items-center justify-center text-5xl rounded-lg border-b-4 border-[#b1a295] active:border-b-transparent text-[#242d44]" @click="append('7')">7</div>
                      <div class="border bg-[#eae3db] flex items-center justify-center text-5xl rounded-lg border-b-4 border-[#b1a295] active:border-b-transparent text-[#242d44]" @click="append('8')">8</div>
                      <div class="border bg-[#eae3db] flex items-center justify-center text-5xl rounded-lg border-b-4 border-[#b1a295] active:border-b-transparent text-[#242d44]" @click="append('9')">9</div>
                      <div class="border bg-[#a2b2e1] flex items-center justify-center text-3xl rounded-lg border-b-4 border-[#516aad] active:border-b-transparent text-white" @click="clear">DEL</div>
                      <div class="border bg-[#eae3db] flex items-center justify-center text-5xl rounded-lg border-b-4 border-[#b1a295] active:border-b-transparent text-[#242d44]" @click="append('4')">4</div>
                      <div class="border bg-[#eae3db] flex items-center justify-center text-5xl rounded-lg border-b-4 border-[#b1a295] active:border-b-transparent text-[#242d44]" @click="append('5')">5</div>
                      <div class="border bg-[#eae3db] flex items-center justify-center text-5xl rounded-lg border-b-4 border-[#b1a295] active:border-b-transparent text-[#242d44]" @click="append('6')">6</div>
                      <div class="border bg-[#eae3db] flex items-center justify-center text-3xl rounded-lg border-b-4 border-[#b1a295] active:border-b-transparent text-[#242d44]" @click="add">+</div>
                      <div class="border bg-[#eae3db] flex items-center justify-center text-5xl rounded-lg border-b-4 border-[#b1a295] active:border-b-transparent text-[#242d44]" @click="append('1')">1</div>
                      <div class="border bg-[#eae3db] flex items-center justify-center text-5xl rounded-lg border-b-4 border-[#b1a295] active:border-b-transparent text-[#242d44]" @click="append('2')">2</div>
                      <div class="border bg-[#eae3db] flex items-center justify-center text-5xl rounded-lg border-b-4 border-[#b1a295] active:border-b-transparent text-[#242d44]" @click="append('3')">3</div>
                      <div class="border bg-[#eae3db] flex items-center justify-center text-5xl rounded-lg border-b-4 border-[#b1a295] active:border-b-transparent text-[#242d44]" @click="minus">-</div>
                      <div class="border bg-[#eae3db] flex items-center justify-center text-5xl rounded-lg border-b-4 border-[#b1a295] active:border-b-transparent text-[#242d44]" @click="dot">.</div>
                      <div class="border bg-[#eae3db] flex items-center justify-center text-5xl rounded-lg border-b-4 border-[#b1a295] active:border-b-transparent text-[#242d44]" @click="append('0')">0</div>
                      <div class="border bg-[#eae3db] flex items-center justify-center text-5xl rounded-lg border-b-4 border-[#b1a295] active:border-b-transparent text-[#242d44] italic pb-1" @click="divide">/</div>
                      <div class="border bg-[#eae3db] flex items-center justify-center text-3xl rounded-lg border-b-4 border-[#b1a295] active:border-b-transparent text-[#242d44]"  @click="times">x</div>
                      <div class="border bg-[#a2b2e1] flex items-center justify-center text-3xl rounded-lg border-b-4 border-[#516aad] active:border-b-transparent text-white col-span-2 uppercase" @click="clear">reset</div>
                      <div class=" col-span-2 border bg-[#ef6a59] flex items-center justify-center text-3xl rounded-lg border-b-4 border-[#ba3223] active:border-b-transparent text-white" @click="equal">=</div>
                  </div>
                </div>
           </div>
    </div>

</template>

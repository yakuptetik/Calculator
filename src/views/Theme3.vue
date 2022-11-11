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
    sign() {
      this.current = this.current.charAt(0) === '-' ? 
        this.current.slice(1) : `${this.current}`;
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
      this.operator = (a, b) => a - (-b);
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
  
  <template>
    <div class="h-full w-full flex items-center justify-center">
           <div class="w-[500px] ">
                <div class="flex w-full text-[#36352e] pb-4  justify-between items-center">
                    <div class=" pl-2  text-3xl">
                        calc
                    </div>
                        <div class="flex items-end mb-4 gap-1  ">
                            <p class="pr-2 text-xs uppercase">
                            theme
                            </p>
                        <div>
                            <div class="flex text-xs pl-2  px-1  gap-3 mb-2 ">
                                <div name="theme1" class="rounded-full flex justify-center h-4 w-4 cursor-pointer ">1</div>
                                <div name="theme2" class="rounded-full flex justify-center h-4 w-4 cursor-pointer ">2</div>
                                <div name="theme3" class="rounded-full flex justify-center h-4 w-4 cursor-pointer ">3</div>
                        </div> 
                             <div class="flex bg-[#d3cdcd] rounded-full px-2 py-1 gap-3" >
                                <router-link  to="/" activeClass="!rounded-full h-4 w-4 cursor-pointer bg-[#f2893c]" class=" rounded-full h-4 w-4 cursor-pointer">
                                </router-link>
                                <router-link  to="/theme2" activeClass="!rounded-full h-4 w-4 cursor-pointer bg-[#f2893c]" class=" rounded-full h-4 w-4 cursor-pointer">
                                </router-link>
                                <router-link to="/theme3" activeClass="!rounded-full h-4 w-4 cursor-pointer bg-[#f2893c]" class=" rounded-full h-4 w-4 cursor-pointer">        
                                </router-link>
                           </div>
                        </div>
                        
                        </div>
                </div>       
                <div class="text-[#36352e] relative text-5xl flex items-center justify-end pr-5  rounded-lg bg-[#eeeeee] my-4 h-32"> 
                <div class="">
                    {{current || '0'}}
                </div> 
                </div>
                <div class="flex bg-[#d3cdcd] rounded-lg items-center h-[450px] w-[500px] justify-center">
                        <div class="grid grid-cols-4  grid-rows-5 h-96 w-[450px] gap-4">
                            <div class="bg-[#e6e4e0] cursor-pointer flex items-center justify-center text-5xl rounded-lg border-b-4 border-[#a49f90] active:border-b-transparent text-[#36352e] hover:bg-[#eeeeee]" @click="append('7')">7</div>
                            <div class="bg-[#e6e4e0] cursor-pointer flex items-center justify-center text-5xl rounded-lg border-b-4 border-[#a49f90] active:border-b-transparent text-[#36352e] hover:bg-[#eeeeee]" @click="append('8')">8</div>
                            <div class="bg-[#e6e4e0] cursor-pointer flex items-center justify-center text-5xl rounded-lg border-b-4 border-[#a49f90] active:border-b-transparent text-[#36352e] hover:bg-[#eeeeee]" @click="append('9')">9</div>
                            <div class="bg-[#62b5bd] cursor-pointer flex items-center justify-center text-3xl rounded-lg border-b-4 border-[#256068] active:border-b-transparent text-white" @click="clear">DEL</div>
                            <div class="bg-[#e6e4e0] cursor-pointer flex items-center justify-center text-5xl rounded-lg border-b-4 border-[#a49f90] active:border-b-transparent text-[#36352e] hover:bg-[#eeeeee]" @click="append('4')">4</div>
                            <div class="bg-[#e6e4e0] cursor-pointer flex items-center justify-center text-5xl rounded-lg border-b-4 border-[#a49f90] active:border-b-transparent text-[#36352e] hover:bg-[#eeeeee]" @click="append('5')">5</div>
                            <div class="bg-[#e6e4e0] cursor-pointer flex items-center justify-center text-5xl rounded-lg border-b-4 border-[#a49f90] active:border-b-transparent text-[#36352e] hover:bg-[#eeeeee]" @click="append('6')">6</div>
                            <div class="bg-[#e6e4e0] cursor-pointer flex items-center justify-center text-3xl rounded-lg border-b-4 border-[#a49f90] active:border-b-transparent text-[#36352e] hover:bg-[#eeeeee]" @click="add">+</div>
                            <div class="bg-[#e6e4e0] cursor-pointer flex items-center justify-center text-5xl rounded-lg border-b-4 border-[#a49f90] active:border-b-transparent text-[#36352e] hover:bg-[#eeeeee]" @click="append('1')">1</div>
                            <div class="bg-[#e6e4e0] cursor-pointer flex items-center justify-center text-5xl rounded-lg border-b-4 border-[#a49f90] active:border-b-transparent text-[#36352e] hover:bg-[#eeeeee]" @click="append('2')">2</div>
                            <div class="bg-[#e6e4e0] cursor-pointer flex items-center justify-center text-5xl rounded-lg border-b-4 border-[#a49f90] active:border-b-transparent text-[#36352e] hover:bg-[#eeeeee]" @click="append('3')">3</div>
                            <div class="bg-[#e6e4e0] cursor-pointer flex items-center justify-center text-5xl rounded-lg border-b-4 border-[#a49f90] active:border-b-transparent text-[#36352e] hover:bg-[#eeeeee]" @click="minus">-</div>
                            <div class="bg-[#e6e4e0] cursor-pointer flex items-center justify-center text-5xl rounded-lg border-b-4 border-[#a49f90] active:border-b-transparent text-[#36352e] hover:bg-[#eeeeee]" @click="dot">.</div>
                            <div class="bg-[#e6e4e0] cursor-pointer flex items-center justify-center text-5xl rounded-lg border-b-4 border-[#a49f90] active:border-b-transparent text-[#36352e] hover:bg-[#eeeeee]" @click="append('0')">0</div>
                            <div class="bg-[#e6e4e0] cursor-pointer flex items-center justify-center text-5xl rounded-lg border-b-4 border-[#a49f90] active:border-b-transparent text-[#36352e] hover:bg-[#eeeeee] italic" @click="divide">/</div>
                            <div class="bg-[#e6e4e0] cursor-pointer flex items-center justify-center text-3xl rounded-lg border-b-4 border-[#a49f90] active:border-b-transparent text-[#36352e] hover:bg-[#eeeeee]" @click="times">x</div>
                            <div class="bg-[#62b5bd] cursor-pointer flex items-center justify-center text-3xl rounded-lg border-b-4 border-[#256068] active:border-b-transparent text-white col-span-2 uppercase" @click="clear">reset</div>
                            <div class="col-span-2 cursor-pointer  bg-[#f2893c] flex items-center justify-center text-3xl rounded-lg border-b-4 border-[#88391b] active:border-b-transparent text-white " @click="equal">=</div>
                        </div>
                </div>
           </div>
    </div>

</template>


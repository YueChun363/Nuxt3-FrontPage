<script setup lang='ts'>

const { data } = await useFetch('/api/test')
const message = data.value?.message
const title = ref('首页')
useSeoMeta({
    title: () => title.value,
    description: '首页描述',
    ogTitle: '首页',
    ogDescription: '首页描述',
})
const moneyList = ref([
    {
        label: '1 GB Storage'
    },
    {
        label: '2 GB Storage'
    },
    {
        label: '3 GB Storage'
    },
    {
        label: '4 GB Storage'
    },
    {
        label: '5 GB Storage'
    },
    {
        label: '6 GB Storage'
    },
    {
        label: '7 GB Storage'
    },
])
onMounted(() => {

})
</script>

<template>
    <div class="scroll-smooth bg-[#fafafa]">
        <div class="px-2 py-2 max-w-7xl mx-auto md:px-6">
            <div class="flex justify-center items-center pt-24 md:pt-40 text-[#6366f1]">
                <div class="flex ring-1 cursor-pointer rounded-full font-medium mx-auto px-3 py-1 gap-2 bg-[#eef2ff]">
                    <span class="text-sm pt-[2px]">Made with NuxtJs3.x</span>
                    <span class="align-baseline pt-[2px]">
                        <el-icon>
                            <el-icon-share />
                        </el-icon>
                    </span>
                </div>
            </div>
            <div class="mx-auto text-center">
                <h1 class="text-5xl md:text-6xl font-bold pt-10">
                    Build your landing in seconds
                </h1>
                <p class="text-gray-600 py-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                <div class="flex flex-wrap justify-center gap-x-6 gap-y-3 pt-2">
                    <div
                        class="flex items-center cursor-pointer ring-1 ring-slate-300 rounded-full text-white font-medium px-4 py-2.5 gap-3 bg-[#18181b] shadow-sm">
                        <span class="text-base">Get started</span>
                        <el-icon size="24">
                            <el-icon-right />
                        </el-icon>
                    </div>
                    <div
                        class="flex items-center cursor-pointer ring-1 ring-slate-300 rounded-full font-medium px-4 py-2 gap-2.5 bg-white hover:bg-gray-100 shadow-sm">
                        <el-icon size="24">
                            <el-icon-avatar />
                        </el-icon>
                        <span class="text-base">Use this template</span>
                    </div>
                </div>
            </div>
            <div class="mt-20 md:mt-28 border border-gradient rounded-xl p-4">
                <div
                    class="aspect-video rounded-xl border border-dashed border-gray-950/10 overflow-hidden bg-sky-400/40">
                </div>
            </div>
            <div class="text-center mt-12 md:mt-24">
                <h3 class="text-xl">I hope for a good day</h3>
                <div class="flex justify-between items-center flex-wrap mx-4 gap-x-6 gap-y-3 mt-8">
                    <el-icon size="48">
                        <el-icon-sunrise />
                    </el-icon>
                    <el-icon size="48">
                        <el-icon-sunny />
                    </el-icon>
                    <el-icon size="48">
                        <el-icon-mostly-cloudy />
                    </el-icon>
                    <el-icon size="48">
                        <el-icon-sunset />
                    </el-icon>
                    <el-icon size="48">
                        <el-icon-moon />
                    </el-icon>
                </div>
            </div>
            <div class="text-center mt-24 md:mt-60">
                <h3 class="text-[#6366f1] font-bold">Features</h3>
                <h1 class="text-3xl md:text-5xl fotn-black mt-2">Why choose me huh?</h1>
                <p class="mt-6 text-lg/8 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-24 text-left">
                    <div class="border rounded-xl p-6 bg-white shadow-sm">
                        <el-icon size="32">
                            <el-icon-setting />
                        </el-icon>
                        <h4 class="font-bold mt-3">Easy to use</h4>
                        <p class="mt-2 text-gray-500">
                            Hahahahah, it's funny~ But I'm gonna tell you something more funny.
                        </p>
                    </div>
                    <div class="border rounded-xl p-6 bg-white shadow-sm">
                        <el-icon size="32">
                            <el-icon-check />
                        </el-icon>
                        <h4 class="font-bold mt-3">Reliable</h4>
                        <p class="mt-2 text-gray-500">
                            Magna Lorem ex cillum fugiat ad enim aute irure sit duis minim.
                        </p>
                    </div>
                    <div class="border rounded-xl p-6 bg-white shadow-sm">
                        <el-icon size="32">
                            <el-icon-lock />
                        </el-icon>
                        <h4 class="font-bold mt-3">Secure</h4>
                        <p class="mt-2 text-gray-500">
                            Proident nostrud excepteur sint ut culpa consectetur aute adipisicing non anim ullamco.
                        </p>
                    </div>
                    <div class="border rounded-xl p-6 bg-white shadow-sm">
                        <el-icon size="32">
                            <el-icon-bicycle />
                        </el-icon>
                        <h4 class="font-bold mt-3">Fast</h4>
                        <p class="mt-2 text-gray-500">
                            Qui reprehenderit nostrud dolore nisi ad fugiat labore eiusmod sint aliquip nisi voluptate.
                        </p>
                    </div>
                    <div class="border rounded-xl p-6 bg-white shadow-sm">
                        <el-icon size="32">
                            <el-icon-money />
                        </el-icon>
                        <h4 class="font-bold mt-3">Affordable</h4>
                        <p class="mt-2 text-gray-500">
                            Reprehenderit fugiat elit in do ipsum ut pariatur.
                        </p>
                    </div>
                    <div class="border rounded-xl p-6 bg-white shadow-sm">
                        <el-icon size="32">
                            <el-icon-data-analysis />
                        </el-icon>
                        <h4 class="font-bold mt-3">Scalable</h4>
                        <p class="mt-2 text-gray-500">
                            Lorem deserunt et eiusmod. Ea in consectetur minim officia ullamco enim deserunt est.
                        </p>
                    </div>
                </div>
            </div>
            <div class="text-center mt-24 md:mt-60">
                <h3 class="text-[#6366f1] font-bold">Pricing</h3>
                <h1 class="text-3xl md:text-5xl fotn-black mt-2">The money I need</h1>
                <p class="mt-6 text-lg/8 text-gray-600">Pariatur laborum dolor ea commodo sit aute aliquip qui et cillum
                    excepteur.</p>
                <div class="flex flex-col mt-24 lg:grid lg:grid-cols-3 text-left gap-x-3 gap-y-8">
                    <div class="p-8 border rounded-xl bg-white shadow-sm">
                        <h1 class="text-2xl font-bold">Basic</h1>
                        <p class="mt-3 text-gray-600">A basic plan for individuals.</p>
                        <h1 class="mt-6 text-2xl font-bold">$9.99</h1>
                        <div
                            class="border rounded-full text-center bg-gray-50 hover:bg-gray-100 py-2 text-gray-600 text-sm mt-6 cursor-pointer">
                            Get Started</div>
                        <div class="mt-4">
                            <div class="flex items-center gap-3 py-2" v-for="(item, index) in moneyList" :key=index>
                                <div class="w-4 h-4 text-center leading-4 rounded-full bg-black text-white font-bold">
                                    <el-icon size="12">
                                        <el-icon-check />
                                    </el-icon>
                                </div>
                                <p class="text-gray-600 text-sm">{{ item.label }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-8 border-2 border-black rounded-xl bg-white shadow-sm lg:scale-110">
                        <h1 class="text-4xl font-bold">Standard</h1>
                        <p class="mt-3 text-gray-600">A standard plan for small teams.</p>
                        <h1 class="mt-6 text-4xl font-bold">$19.99</h1>
                        <div
                            class="border rounded-full text-center bg-slate-950 hover:bg-slate-900 py-2 text-white text-md mt-6 cursor-pointer">
                            Get Started</div>
                        <div class="mt-4">
                            <div class="flex items-center gap-3 py-2" v-for="(item, index) in moneyList" :key=index>
                                <div class="w-4 h-4 text-center leading-4 rounded-full bg-black text-white font-bold">
                                    <el-icon size="12">
                                        <el-icon-check />
                                    </el-icon>
                                </div>
                                <p class="text-gray-600 text-sm">{{ item.label }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-8 border rounded-xl bg-white shadow-sm">
                        <h1 class="text-2xl font-bold">Premium</h1>
                        <p class="mt-3 text-gray-600">A premium plan for large teams.</p>
                        <h1 class="mt-6 text-2xl font-bold">$29.99</h1>
                        <div
                            class="border rounded-full text-center bg-gray-50 hover:bg-gray-100 py-2 text-gray-600 text-sm mt-6 cursor-pointer">
                            Get Started</div>
                        <div class="mt-4">
                            <div class="flex items-center gap-3 py-2" v-for="(item, index) in moneyList" :key=index>
                                <div class="w-4 h-4 text-center leading-4 rounded-full bg-black text-white font-bold">
                                    <el-icon size="12">
                                        <el-icon-check />
                                    </el-icon>
                                </div>
                                <p class="text-gray-600 text-sm">{{ item.label }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="Features" class="bg-[#ec4899] h-8">0</div>
            <div class="h-8">1</div>
            <div class="h-8">2</div>
            <div class="h-8">3</div>
            <div class="h-8">4</div>
            <div class="h-8">5</div>
            <div class="h-8">6</div>
            <div class="h-8">7</div>
            <div class="h-8">8</div>
            <div class="h-8">9</div>
            <div id="Pricing" class="bg-[#ec4899] h-8">10</div>
            <div class=" h-8">11</div>
            <div class=" h-8">12</div>
            <div class=" h-8">13</div>
            <div class=" h-8">14</div>
            <div class=" h-8">15</div>
            <div class=" h-8">16</div>
            <div class=" h-8">17</div>
            <div class=" h-8">18</div>
            <div class=" h-8">19</div>
            <div class=" h-8">20</div>
            <div id="Testimonials" class="bg-[#ec4899] h-8">21</div>
            <div class="h-8">22</div>
            <div class="h-8">23</div>
            <div class="h-8">24</div>
            <div class="h-8">25</div>
            <div class="h-8">26</div>
            <div class="h-8">29</div>
            <div class="h-8">29</div>
            <div class="h-8">29</div>
            <div class="h-8">29</div>
            <div class="h-8">29</div>
            <div class="h-8">29</div>
            <div id="FAQ" class="bg-[#ec4899] h-8">29</div>
            <div class="h-8">29</div>
            <div class="h-8">29</div>
            <div class="h-8">29</div>
            <div class="h-8">29</div>
            <div class="h-8">29</div>
        </div>
    </div>
</template>

<style scoped lang='less'></style>
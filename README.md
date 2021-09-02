This is for the Practice module <br>
v-text - not render {{ }} while reloading instead of <h1>{{deckName}}</h1><br>
v-html - to render html content inside text <br>
v-bind:href="" - to bind href to vue "v-bind" shorthand is ":"<br>
v-on: = to add any different events "v-on:" shorthand is "@"<br>
<ul>
 <li><strong>@click=""</strong> to handle click event </li>
 <li><strong>@click.prevent=""</strong> to prevent from default behaviour </li>
</ul>
v-model: <br> 
<ul>
 <li>binding to setup 2 way communication bw vuejs and html<br></li>
 <li>with checkboxes and radio and select it saves value of them.<br></li>
 <li>true-value and false-value with v-model;<br></li>
 <li> <strong>v-model.trim=""</strong> for removing trailing white spaces</li>
 <li><strong>v-model.lazy=""</strong> for handling changes after we move to next </li>
 <li><strong>v-model.number</strong> for converting string to number</li>
</ul>

<strong>v-for="items in products"</strong> looping through array or objects<br>

methods : <br>
Additional Modifiers<br>
<ul>
<li>stop : stop propagation of events</li>
<li>self : trigger handler only if the target is this element</li>
<li>once: only trigger this once at most</li>
</ul>

Computed Vs Methods <br>
<ul>
<li>main difference is computed is cached and only calculated when necessary</li>
<li>method will be calculated every that part of dom is rerendered</li>
</ul>

Conditional rendering <br>
<ul>
 <li> If Else
  <ul>
   <li><strong>v-if="expression"</strong></li>s
   <li><strong>v-else="expression"</strong></li>
   <li><strong>v-else-if="expression"</strong></li>
  </ul>
 </li>

 <li><strong>v-show="expression"</strong> it is different from v-if in sense that it loads value but hides it until expression is true but v-if is not hiding it just didnt load datapass`</li>
</ul>

<strong>v-cloak</strong> is directive which is used to hide expression until expression is rendered<br>

<strong>name.component</strong> is used to add component.<br>
<ul>
<li>name : In component if dont use ":" this add direct</li>
<li>:name : In component if use ":" this add variable </li>
</ul>

<strong>"$emit(\'flip\')"</strong> <br>
<strong>"$emit('add', item)"</strong><br>
<ul>
<li>this will allow us to handle event flip in our root instance</li>
<li>item here is argument to parent function</li>
</ul>

<strong>Modifiers<br></strong>
<strong>Key Events</strong><br23>


<strong>slots</strong> comes in handy if you want to allow arbitary HTML content there.
We can access data from the child component, when providing slot content, from parent component.
<br>

npm install -g vue-cli<br>
<strong>Create Project With CLI</strong><br>
Run command: vue create flashcard-app<br>
npm run server <br>
vue init <template-name> <project-name><br>

LifeCycle Hook in Vue<br>
<strong>mounted</strong> is used when your component is added to DOM. To send HTTP request to fetch data.<br>

Binding Classes with objects and arrays<br>
<ul>
<li>:class="['font-weight-bold', 'mr-2']"</li>
<li>:style="{'width':'60px', 'text-align':'center'}"</li>
</ul>

Transition Classes - Vue HTML - fade<br>
You can use animation framework <br>

Filters<br>
<ul>
<li>Vue.js allows to define filters that can be used to apply text formatting</li>
<li>Filters should be appended to the end of the javascript expression denoted by the "pipe" symbol</li>
<li> Filter can be created outside vue component</li>
<li> They can be chained means using multiple pipe character you can chain as many as you want </li>
<li> Can be used with mustaches as well as with v-bind</li>
</ul>

We can pass props as Object or Arrays.<br>

<b>ref</b> will get this.$refs.tag.property <br>


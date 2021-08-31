This is for the Practice module <br>
v-text - not render {{ }} while reloading instead of <h1>{{deckName}}</h1><br>
v-html - to render html content inside text <br>
v-bind:href="" - to bind href to vue "v-bind" shorthand is "@"<br>
<ul>
 <li><strong>@click=""</strong> to handle click event </li>
 <li><strong>@click.prevent=""</strong> to prevent from default behaviour </li>
</ul>
v-model: <br> 
<ul>
 <li>binding to setup 2 way communication bw vuejs and html<br></li>
 <li>with checkboxes and radio and select it saves value of them.<br></li>
 <li>v-on: = to add any different events "v-on:" shorthand is "@"<br><li>
 <li>true-value and false-value with v-model;<br></li>
 <li> <strong>v-model.trim=""</strong> for removing trailing white spaces</li>
 <li><strong>v-model.lazy=""</strong> for handling changes after we move to next </li>
 <li><strong>v-model.number</strong> for converting string to number</li>
</ul>

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
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.JsonEditor = factory());
}(this, function () { 'use strict';

  var template$1 = {"v":3,"t":[" ",{"t":7,"e":"div","a":{"class":"root"},"f":[{"t":4,"f":[{"t":8,"r":"value"}],"n":54,"r":"root"},{"t":4,"n":51,"f":["undefined"],"r":"root"}]}],"p":{"value":[{"t":8,"x":{"r":["~/getType","."],"s":"_0(_1)"}}],"object":[{"t":7,"e":"div","a":{"class":["obj",{"t":4,"f":[" open"],"n":50,"rx":{"r":"~/toggles","m":[{"t":30,"n":"@keypath"}]}}]},"f":[{"t":7,"e":"span","v":{"click":{"m":"toggle","a":{"r":["~/escapeKey","@keypath"],"s":"[\"toggles.\"+_0(_1)]"}}},"f":["{",{"t":4,"f":[{"t":7,"e":"span","a":{"class":"ellipsis"},"f":["..."]}],"n":50,"x":{"r":["@keypath","~/toggles"],"s":"!_1[_0]"}}]},{"t":4,"f":[" ",{"t":4,"f":[{"t":7,"e":"div","a":{"class":"entry"},"f":[{"t":7,"e":"span","a":{"class":"key"},"v":{"click":{"m":"set","a":{"r":["~/escapeKey","@keypath","k"],"s":"[\"keys.\"+_0(_1),_2]"}}},"f":[{"t":7,"e":"span","f":[{"t":4,"f":[{"t":7,"e":"textarea","a":{"rows":[{"t":4,"f":["5"],"n":50,"x":{"r":["k","@keypath","~/keys"],"s":"_0.indexOf(\"\\n\")!==-1||_2[_1].indexOf(\"\\n\")!==-1"}},{"t":4,"n":51,"f":["1"],"x":{"r":["k","@keypath","~/keys"],"s":"_0.indexOf(\"\\n\")!==-1||_2[_1].indexOf(\"\\n\")!==-1"}}]},"f":[{"t":2,"rx":{"r":"~/keys","m":[{"t":30,"n":"@keypath"}]}}]}],"n":50,"x":{"r":["@keypath","~/keys"],"s":"typeof _1[_0]===\"string\""}},{"t":4,"n":51,"f":[{"t":7,"e":"pre","f":[{"t":2,"r":"k"}]}],"x":{"r":["@keypath","~/keys"],"s":"typeof _1[_0]===\"string\""}}]},{"t":4,"f":[{"t":7,"e":"button","a":{"title":"apply","class":"icon ok"},"v":{"click":{"m":"renameKey","a":{"r":["@keypath","~/keys"],"s":"[_0,_1[_0]]"}}},"f":["OK"]},{"t":7,"e":"button","a":{"title":"cancel","class":"icon cancel"},"v":{"click":{"m":"stopEdit","a":{"r":["@keypath"],"s":"[_0,\"keys\"]"}}},"f":["X"]},{"t":7,"e":"button","a":{"title":"remove key","style-margin-left":"1em","class":"icon cancel"},"v":{"click":{"m":"removeKey","a":{"r":["@keypath"],"s":"[_0]"}}},"f":["-"]}],"n":50,"x":{"r":["@keypath","~/keys"],"s":"typeof _1[_0]===\"string\""}}]},{"t":7,"e":"div","a":{"class":"value"},"f":[{"t":8,"r":"value"}]}]}],"n":52,"i":"k,i","r":"."}],"n":50,"rx":{"r":"~/toggles","m":[{"t":30,"n":"@keypath"}]}},{"t":7,"e":"span","a":{"class":"close"},"f":["}"]},{"t":4,"f":[" ",{"t":7,"e":"button","a":{"title":"more actions","class":"icon"},"v":{"click":{"m":"toggle","a":{"r":["~/escapeKey","@keypath"],"s":"[\"extras.\"+_0(_1)]"}}},"f":["..."]}," ",{"t":4,"f":[{"t":7,"e":"input","a":{"value":[{"t":2,"rx":{"r":"~/values","m":[{"t":30,"n":"@keypath"},"name"]}}]}},{"t":7,"e":"button","a":{"title":"add key","class":"icon ok"},"v":{"click":{"m":"addKey","a":{"r":["@keypath"],"s":"[_0]"}}},"f":["+"]}],"n":50,"rx":{"r":"~/extras","m":[{"t":30,"n":"@keypath"}]}}],"n":50,"rx":{"r":"~/toggles","m":[{"t":30,"n":"@keypath"}]}}]}],"array":[{"t":7,"e":"div","a":{"class":["array",{"t":4,"f":[" open"],"n":50,"rx":{"r":"~/toggles","m":[{"t":30,"n":"@keypath"}]}}]},"f":[{"t":7,"e":"span","v":{"click":{"m":"toggle","a":{"r":["~/escapeKey","@keypath"],"s":"[\"toggles.\"+_0(_1)]"}}},"f":["[",{"t":4,"f":[{"t":7,"e":"span","a":{"class":"ellipsis"},"f":["..."]}],"n":50,"x":{"r":["@keypath","~/toggles"],"s":"!_1[_0]"}}]},{"t":4,"f":[" ",{"t":4,"f":[{"t":7,"e":"div","a":{"class":"entry"},"f":[{"t":7,"e":"span","a":{"class":"idx"},"f":[{"t":2,"r":"i"}]},{"t":7,"e":"div","a":{"class":"value"},"f":[{"t":8,"r":"value"}]}]}],"n":52,"i":"i","r":"."}],"n":50,"rx":{"r":"~/toggles","m":[{"t":30,"n":"@keypath"}]}},{"t":7,"e":"span","a":{"class":"close"},"f":["]"]},{"t":4,"f":[" ",{"t":7,"e":"button","a":{"title":"more actions","class":"icon"},"v":{"click":{"m":"toggle","a":{"r":["~/escapeKey","@keypath"],"s":"[\"extras.\"+_0(_1)]"}}},"f":["..."]}," ",{"t":4,"f":[{"t":7,"e":"button","a":{"title":"push","class":"icon"},"v":{"click":{"m":"push","a":{"r":["@keypath"],"s":"[_0,\"\"]"}}},"f":[">+"]}," ",{"t":7,"e":"button","a":{"title":"unshift","class":"icon"},"v":{"click":{"m":"unshift","a":{"r":["@keypath"],"s":"[_0,\"\"]"}}},"f":["+<"]}," ",{"t":7,"e":"button","a":{"title":"pop","class":"icon"},"v":{"click":{"m":"pop","a":{"r":["@keypath"],"s":"[_0]"}}},"f":[">-"]}," ",{"t":7,"e":"button","a":{"title":"shift","class":"icon"},"v":{"click":{"m":"shift","a":{"r":["@keypath"],"s":"[_0]"}}},"f":["<-"]}],"n":50,"rx":{"r":"~/extras","m":[{"t":30,"n":"@keypath"}]}}],"n":50,"rx":{"r":"~/toggles","m":[{"t":30,"n":"@keypath"}]}}]}],"string":[{"t":7,"e":"span","a":{"class":"str"},"v":{"click":{"m":"startEdit","a":{"r":["@keypath"],"s":"[_0]"}}},"f":[{"t":7,"e":"span","a":{"class":"str"},"f":[{"t":4,"f":[{"t":7,"e":"textarea","a":{"rows":[{"t":4,"f":["5"],"n":50,"x":{"r":["."],"s":"_0.indexOf(\"\\n\")!==-1"}},{"t":4,"n":51,"f":["1"],"x":{"r":["."],"s":"_0.indexOf(\"\\n\")!==-1"}}]},"f":[{"t":2,"r":"."}]}],"n":50,"x":{"r":["~/editable","@keypath","~/edits"],"s":"_0&&_2[_1]"}},{"t":4,"n":51,"f":[{"t":7,"e":"pre","f":[{"t":2,"r":"."}]}],"x":{"r":["~/editable","@keypath","~/edits"],"s":"_0&&_2[_1]"}}]},{"t":7,"e":"span","a":{"class":"close"}},{"t":4,"f":[{"t":8,"r":"editorEnd"}],"n":50,"x":{"r":["~/editable","@keypath","~/edits"],"s":"_0&&_2[_1]"}}]}],"number":[{"t":7,"e":"span","a":{"class":"num"},"v":{"click":{"m":"startEdit","a":{"r":["@keypath"],"s":"[_0]"}}},"f":[{"t":4,"f":[{"t":7,"e":"input","a":{"type":"number","value":[{"t":2,"r":"."}]}}],"n":50,"x":{"r":["~/editable","@keypath","~/edits"],"s":"_0&&_2[_1]"}},{"t":4,"n":51,"f":[{"t":2,"r":"."}],"x":{"r":["~/editable","@keypath","~/edits"],"s":"_0&&_2[_1]"}}]},{"t":7,"e":"span","a":{"class":"close"}},{"t":4,"f":[{"t":8,"r":"editorEnd"}],"n":50,"x":{"r":["~/editable","@keypath","~/edits"],"s":"_0&&_2[_1]"}}],"boolean":[{"t":7,"e":"span","a":{"class":"bool"},"v":{"click":{"m":"startEdit","a":{"r":["@keypath"],"s":"[_0]"}}},"f":[{"t":4,"f":[{"t":7,"e":"input","a":{"type":"checkbox","checked":[{"t":2,"r":"."}]}}],"n":50,"x":{"r":["~/editable","@keypath","~/edits"],"s":"_0&&_2[_1]"}},{"t":4,"n":51,"f":[{"t":2,"r":"."}],"x":{"r":["~/editable","@keypath","~/edits"],"s":"_0&&_2[_1]"}}]},{"t":7,"e":"span","a":{"class":"close"}},{"t":4,"f":[{"t":8,"r":"editorEnd"}],"n":50,"x":{"r":["~/editable","@keypath","~/edits"],"s":"_0&&_2[_1]"}}],"null":[{"t":7,"e":"span","a":{"class":"null"},"v":{"click":{"m":"startEdit","a":{"r":["@keypath"],"s":"[_0]"}}},"f":["null"]},{"t":7,"e":"span","a":{"class":"close"}},{"t":4,"f":[{"t":8,"r":"editorEnd"}],"n":50,"x":{"r":["~/editable","@keypath","~/edits"],"s":"_0&&_2[_1]"}}],"function":[{"t":7,"e":"span","a":{"class":"fn"},"v":{"click":{"m":"startEdit","a":{"r":["@keypath"],"s":"[_0]"}}},"f":["function() {...}"]},{"t":7,"e":"span","a":{"class":"close"}}],"wat":[{"t":7,"e":"span","a":{"class":"wat"},"v":{"click":{"m":"startEdit","a":{"r":["@keypath"],"s":"[_0]"}}},"f":["???"]},{"t":7,"e":"span","a":{"class":"close"}},{"t":4,"f":[{"t":8,"r":"editorEnd"}],"n":50,"x":{"r":["~/editable","@keypath","~/edits"],"s":"_0&&_2[_1]"}}],"editorEnd":[{"t":7,"e":"button","a":{"title":"close editor","class":"ok icon"},"v":{"click":{"m":"stopEdit","a":{"r":["@keypath"],"s":"[_0]"}}},"f":["OK"]},{"t":7,"e":"select","v":{"change":{"m":"changeType","a":{"r":["@keypath"],"s":"[_0]"}}},"a":{"twoway":"false","value":[{"t":2,"x":{"r":["~/getType","."],"s":"_0(_1)"}}]},"f":[" ",{"t":7,"e":"option","f":["string"]}," ",{"t":7,"e":"option","f":["number"]}," ",{"t":7,"e":"option","f":["boolean"]}," ",{"t":7,"e":"option","f":["object"]}," ",{"t":7,"e":"option","f":["array"]}," ",{"t":7,"e":"option","f":["null"]}]}]}};

  var template = template$1;

  // TODO: array splicing
  // TODO: function editor

  function isArray(it) { return !!it && Object.prototype.toString.call(it) === '[object Array]'; }
  function getType(it) {
    if (it === null) return 'null';
    else if (typeof it === 'string') return 'string';
    else if (typeof it === 'number') return 'number';
    else if (typeof it === 'boolean') return 'boolean';
    else if (typeof it === 'function') return 'function';
    else if (typeof it === 'object' && isArray(it)) return 'array';
    else if (typeof it === 'object') return 'object';
    else return 'wat';
  }
  function join(arr) {
    return Ractive.joinKeys.apply(Ractive, arr);
  }

  var JsonEditor = Ractive.extend({
    template: template,
    css: ".root{font-family:monospace;line-height:1.6em;}.root span,.root pre{display:inline-block;cursor:pointer;margin:0}.root button.icon{border:1px solid rgba(153,153,153,0.25);background:#fdfdfd;border-radius:.2em;font-size:.8em;margin:0 .25em;padding:1px .2em 0 .2em;color:#999;cursor:pointer;outline:none;transition-property:color,border;transition-duration:.3s;transition-timing-function:ease-in-out;vertical-align:top;}.root button.icon:hover{color:#0000bf;border:1px solid rgba(0,0,191,0.5)}.root button.icon.ok:hover{color:#006000;border:1px solid rgba(0,96,0,0.5)}.root button.icon.cancel:hover{color:#bf0000;border:1px solid rgba(191,0,0,0.5)}.root textarea{font-size:1.025em;border:1px solid rgba(153,153,153,0.3);border-radius:.2em}.root select{border:1px solid rgba(153,153,153,0.3);background:#fdfdfd;padding:1px .2em 0 .2em;border-radius:1em;vertical-align:top;font-size:.7em;outline:none}.root input{font-size:.7em;border:1px solid rgba(153,153,153,0.3);border-radius:.2em}.root .obj,.root .array{display:inline;}.root .obj:hover > .entry,.root .array:hover > .entry{border-left:1px dashed rgba(0,0,0,0.15)}.root .obj .entry,.root .array .entry{transition:border-left .3s ease-in-out;border-left:1px dashed transparent;margin-left:.75em;padding-left:.25em;}.root .obj .entry .close:after,.root .array .entry .close:after{content:',';color:#606060;font-weight:600}.root .obj .entry:last-of-type .close:after,.root .array .entry:last-of-type .close:after{content:''}.root .obj .entry .value,.root .array .entry .value{display:inline}.root .obj .entry .key,.root .array .entry .key{color:#008000;}.root .obj .entry .key pre,.root .array .entry .key pre{user-select:none;-webkit-user-select:none;-moz-user-select:none}.root .obj .entry .key > *,.root .array .entry .key > *{vertical-align:top}.root .obj .entry .key:after,.root .array .entry .key:after{content:':'}.root .obj .entry .key > span > *,.root .array .entry .key > span > *{vertical-align:top}.root .obj .entry .key > span:before,.root .array .entry .key > span:before,.root .obj .entry .key > span:after,.root .array .entry .key > span:after{content:'\"'}.root .obj .entry .idx,.root .array .entry .idx{color:#0000e6;}.root .obj .entry .idx:after,.root .array .entry .idx:after{content:':'}.root .obj .entry .key,.root .array .entry .key,.root .obj .entry .idx,.root .array .entry .idx{vertical-align:top;}.root .obj .entry .key:after,.root .array .entry .key:after,.root .obj .entry .idx:after,.root .array .entry .idx:after{margin-right:.5em}.root .obj > span,.root .array > span{font-weight:600;color:#606060}.root .obj .ellipsis,.root .array .ellipsis{color:#a0a0a0}.root > .obj{padding:.5em;margin:.2em;border:1px solid rgba(153,153,153,0.3);background-color:#fefefe;display:inline-block;border-radius:.2em;}.root > .obj.open{display:block}.root .num{color:#0000e6;font-weight:500}.root .bool{color:#cc8400;font-weight:500}.root .wat{color:#e60000;font-weight:500}.root .null{color:#737373;font-weight:500}.root .fn{color:#005a00}.root .str{color:#753bb0;}.root .str pre{transition:border-left .3s ease-in-out;border-left:1px dashed transparent;padding-left:.1em;}.root .str pre:hover{border-left:1px dashed rgba(0,0,0,0.15)}.root .str span.close{vertical-align:bottom}.root .str > span.str{vertical-align:top;}.root .str > span.str:before,.root .str > span.str:after{content:'\"';display:inline-block;color:#4d004d}.root .str > span.str:before{vertical-align:top}.root .str > span.str:after{vertical-align:bottom}",
    data: function data() {
      return {
        getType: getType,
        toggles: { root: true },
        edits: {},
        keys: {},
        extras: {},
        values: {},
        escapeKey: Ractive.escapeKey,
        editable: true
      };
    },
    renameKey: function renameKey(path, name) {
      var then = path;
      var value = this.get(then);
      path = Ractive.splitKeypath(path);
      var thenKey = path.pop();
      var base = this.get(join(path));
      path.push(name);
      var now = join(path);
      var edit = 'keys.' + Ractive.escapeKey(then);

      delete base[thenKey];
      this.update(then);
      this.set(edit, false);
      this.set(now, value);
    },
    removeKey: function removeKey(path) {
      path = Ractive.splitKeypath(path);
      var key = path.pop();
      var now = join(path);
      var base = this.get(now);
      delete base[key];
      this.update(now);
    },
    addKey: function addKey(path) {
      var namePath = "values." + (Ractive.escapeKey(path)) + ".name";
      var name = this.get(namePath);
      if (!name) return;
      path = Ractive.splitKeypath(path);
      path.push(name);
      this.set(join(path), '');
      this.set(namePath, '');
    },
    startEdit: function startEdit(path) {
      path = "edits." + (Ractive.escapeKey(path));
      if (this.get(path)) return; // already editing
      this.set(path, true);
    },
    stopEdit: function stopEdit(path, key) {
      this.toggle(("" + (key || 'edits') + "." + (Ractive.escapeKey(path))));
      this.fire('update', this.get('root'));
      return false;
    },
    changeType: function changeType(path) {
      var val = getType(this.get(path));
      var next = this.event.original.target.value;
      if (val !== next) {
        switch (next) {
          case 'wat': val = undefined; break;
          case 'null': val = null; break;
          case 'string': val = ''; break;
          case 'number': val = 0; break;
          case 'boolean': val = false; break;
          case 'array': val = []; break;
          default: val = {}; break;
        }
        this.set(path, val);
      }
    },
    oncomplete: function () {
      this.observe('root', function (newValue) {
        this.fire('update', newValue);
      })
    }
  });

  return JsonEditor;

}));
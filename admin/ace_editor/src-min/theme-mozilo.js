define("ace/theme/mozilo",["require","exports","module","ace/lib/dom"],function(e,t,n){t.isDark=!1,t.cssClass="ace-mozilo",t.cssText=".ace_editor {font-family: 'DejaVu Sans Mono', 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;}.ace-mozilo .ace_gutter {background: #ebebeb;color: #333;overflow : hidden;}.ace-mozilo .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-mozilo .ace_scroller {background-color: #FFFFFF;}.ace-mozilo .ace_cursor {border-left: 2px solid black;}.ace-mozilo .ace_overwrite-cursors .ace_cursor {border-left: 0px;border-bottom: 1px solid black;}.ace-mozilo .ace_invisible {color: rgb(191, 191, 191);}.ace-mozilo .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-mozilo .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-mozilo .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-mozilo .ace_invalid {background-color: rgb(153, 0, 0);color: white;}.ace-mozilo .ace_fold {}.ace-mozilo .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-mozilo .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-mozilo .ace_support.ace_type,.ace-mozilo .ace_support.ace_class.ace-mozilo .ace_support.ace_other {color: rgb(109, 121, 222);}.ace-mozilo .ace_variable.ace_parameter {font-style:italic;color:#FD971F;}.ace-mozilo .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-mozilo .ace_comment {color: #236e24;}.ace-mozilo .ace_comment.ace_doc {color: #236e24;}.ace-mozilo .ace_comment.ace_doc.ace_tag {color: #236e24;}.ace-mozilo .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-mozilo .ace_variable {color: rgb(49, 132, 149);}.ace-mozilo .ace_xml-pe {color: rgb(104, 104, 91);}.ace-mozilo .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-mozilo .ace_markup.ace_heading {color: rgb(12, 7, 255);}.ace-mozilo .ace_markup.ace_list {color:rgb(185, 6, 144);}.ace-mozilo .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-mozilo .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-mozilo .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-mozilo .ace_marker-layer .ace_bracket {background: rgba(255, 171, 68, 0.5);margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-mozilo .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.04);}.ace-mozilo .ace_gutter-active-line {background-color : #dcdcdc;}.ace-mozilo .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-mozilo .ace_storage,.ace-mozilo .ace_keyword,.ace-mozilo .ace_meta.ace_tag {color: rgb(147, 15, 128);}.ace-mozilo .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-mozilo .ace_string {color: #1A1AA6;}.ace-mozilo .ace_entity.ace_other.ace_attribute-name {color: #994409;}.ace-mozilo .ace_indent-guide {background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==\") right repeat-y;}/* mozilo sachen */.ace-mozilo .ace_line .ace_mo-syntax {color: rgb(14, 0, 179);}.ace-mozilo .ace_line .ace_mo-user-syntax {color: rgb(14, 179, 14);}.ace-mozilo .ace_line .ace_mo-pugin-place {color: rgb(170, 0, 179);}.ace-mozilo .ace_line .ace_mo-pugin-deact {text-decoration:line-through;color: rgb(170, 0, 179);}.ace-mozilo .ace_line .ace_mo-files {color: rgb(0, 197, 0);}.ace-mozilo .ace_line .ace_mo-files-place {color: rgb(120, 120, 255);}.ace-mozilo .ace_line .ace_lparen {font-weight:bold;color: rgb(179, 0, 0);}.ace-mozilo .ace_line .ace_rparen {font-weight:bold;color: rgb(179, 0, 0);}.ace-mozilo .ace_line .ace_mo-sep {font-weight:bold;color: rgb(179, 0, 0);}.ace-mozilo .ace_line .ace_mo-user-sep {font-weight:bold;color: rgb(14, 179, 14);}.ace-mozilo .ace_line .ace_mo-is {font-weight:bold;color: rgb(179, 0, 0);}";var r=e("../lib/dom");r.importCssString(t.cssText,t.cssClass)})
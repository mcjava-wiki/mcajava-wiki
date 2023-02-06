"use strict";(self.webpackChunkmcjava_wiki=self.webpackChunkmcjava_wiki||[]).push([[316],{4322:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var a=n(7294),l=n(1151);function r(e){const t=Object.assign({h1:"h1",a:"a",span:"span",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",ol:"ol",li:"li"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h1,{id:"resource-pack-conversion",style:{position:"relative"}},a.createElement(t.a,{href:"#resource-pack-conversion","aria-label":"resource pack conversion permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Resource Pack Conversion"),"\n",a.createElement(t.p,null,"This page is meant to explain the process of converting a Java resource pack containing ",a.createElement(t.a,{href:"/pr-preview/pr-7/docs/basics/predicates"},"predicates")," for use with Geyser, which currently include custom model data, damage, and unbreaking status. Though some code snipets may be given as examples, the primary purpose of this page is to explain the general process, whether in a manual or automated fashion."),"\n",a.createElement(t.h2,{id:"introduction",style:{position:"relative"}},a.createElement(t.a,{href:"#introduction","aria-label":"introduction permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Introduction"),"\n",a.createElement(t.p,null,"Resource packs are inherently complex, and converting and using your particular pack with Geyser may be more complex. This information here is largely general and geared towards basic 2D and 3D models added through custom model data or damage predicates. Broader support for features like block models, blockstates, armor, sounds, emoji, custom bows, eating animations, inventory for 3D models, item frame displays, etc. may be added to converters and Geyser in the future. But recognize that at this time, you are largely on your own with more complex use cases like this, as the systems to automate these processes are still in development. The bulk of this overview is based on what I have learned from writing an automated bash script called ",a.createElement(t.a,{href:"https://github.com/Kas-tle/java2bedrock.sh"},"java2bedrock"),". Do note, however, that this page does contain steps that the converter does not currently carry out. Some of this is due to a lack of support on Geyser's end, while some is due to implementation difficulties on the converter's end."),"\n",a.createElement(t.h2,{id:"concept",style:{position:"relative"}},a.createElement(t.a,{href:"#concept","aria-label":"concept permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Concept"),"\n",a.createElement(t.p,null,"When converting a resource pack from Java to Bedrock, even if the conversion process has been automated, it is important to understand what is being done. In the case of predicates commonly used in Java Edition, it must be noted that these do not directly exist on Bedrock Edition. However, Bedrock edition does have the ability to implement fully custom items. Geyser gets around this by allowing the user to map Java predicates to a Bedrock custom item. For more information on Bedrock custom items, please refer to the ",a.createElement(t.a,{href:"https://wiki.bedrock.dev/items/items-intro.html"},"Items")," section of the Bedrock Wiki. The following is an example of a Geyser item mappings file. More information about these files can be found on the ",a.createElement(t.a,{href:"https://wiki.geysermc.org/geyser/custom-items/"},"Custom Items")," page of the Geyser Wiki."),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-json",meta:"highlights={4} title={./custom_mappings/geyser_mappings.json}"},'{\r\n    "format_version": "1",\r\n    "items": {\r\n        "minecraft:apple": [\r\n            {\r\n                "name": "test_food",\r\n                "custom_model_data": 1,\r\n                "icon": "apple_golden"\r\n            }\r\n        ],\r\n        "minecraft:diamond_sword": [\r\n            {\r\n                "name": "test_sword_cmd",\r\n                "custom_model_data": 1,\r\n                "icon": "sword"\r\n            },\r\n            {\r\n                "name": "test_sword_damage",\r\n                "damage_predicate": 1,\r\n                "icon": "sword"\r\n            }\r\n        ]\r\n    }\r\n}\n')),"\n",a.createElement(t.p,null,"Any converter that operates without a Geyser extension to register its items will need to provide a mappings file in the same format."),"\n",a.createElement(t.h2,{id:"gathering-models",style:{position:"relative"}},a.createElement(t.a,{href:"#gathering-models","aria-label":"gathering models permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Gathering Models"),"\n",a.createElement(t.p,null,"In order to begin the conversion process, what needs converting must first be identified. Since no one item entry depends on another, each model gathering subtype may be done in parallel."),"\n",a.createElement(t.h3,{id:"predicate-entries",style:{position:"relative"}},a.createElement(t.a,{href:"#predicate-entries","aria-label":"predicate entries permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Predicate Entries"),"\n",a.createElement(t.p,null,"The first step in the conversion process is finding all relavent predicate entries. This information is needed to construct the mappings file and decide which models need to be converted. This process can be broken down into steps as following steps, which must be performed on all vanilla item model definitions (contained in the Java resource pack under ",a.createElement(t.code,null,"assets/minecraft/models/item/*.json"),") for each entry contained in their respective overrides arrays:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Store the identifier of the overridden Java item, which matches the name of the model file (e.g. ",a.createElement(t.code,null,"diamond_sword"),")"),"\n",a.createElement(t.li,null,"Store or parse the relavent predicate entries, which currently consist of ",a.createElement(t.code,null,".predicate.damage"),",",a.createElement(t.code,null,".predicate.damaged"),", and ",a.createElement(t.code,null,".predicate.custom_model_data"),":","\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"for ",a.createElement(t.code,null,".predicate.damage"),", convert the given float to a durability value by multiplying the given float by the max durability of the item, and taking the integer ceiling of the result"),"\n",a.createElement(t.li,null,"for ",a.createElement(t.code,null,".predicate.damaged"),", convert the given integer to a boolean, using ",a.createElement(t.code,null,"true")," if the given integer is 1, and ",a.createElement(t.code,null,"false")," if the given integer is 0"),"\n",a.createElement(t.li,null,"for ",a.createElement(t.code,null,".predicate.custom_model_data"),", simply store the given integer value"),"\n"),"\n"),"\n",a.createElement(t.li,null,"From the ",a.createElement(t.code,null,".model")," field of the entry, parse and store the following:","\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"the namespace of the predicate entry's model (e.g. in ",a.createElement(t.code,null,"minecraft:item/diamond_sword"),", the namespace is ",a.createElement(t.code,null,"minecraft"),")"),"\n",a.createElement(t.li,null,"the model path of the predicate entry's model (e.g. in ",a.createElement(t.code,null,"minecraft:item/diamond_sword"),", the model path is ",a.createElement(t.code,null,"item/"),")"),"\n",a.createElement(t.li,null,"the model name of the predicate entry's model (e.g. in ",a.createElement(t.code,null,"minecraft:item/diamond_sword"),", the model name is ",a.createElement(t.code,null,"diamond_sword"),")"),"\n"),"\n"),"\n",a.createElement(t.li,null,"Hash the Java item identifier and relavent predicate values to construct a unique hash for each predicate entry that will persist accross conversions"),"\n"),"\n",a.createElement(t.h3,{id:"vanilla-item-models",style:{position:"relative"}},a.createElement(t.a,{href:"#vanilla-item-models","aria-label":"vanilla item models permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Vanilla Item Models"),"\n",a.createElement(t.p,null,"In some cases, the user may want to convert item models that are not implemented through predicate overrides. In such a case, the model will be displayed at a resource pack level with no intervention required from Geyser. A list of models should be made that satisfies the following criteria:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"The model's path also exists in the vanilla resources under ",a.createElement(t.code,null,"assets/minecraft/models/item/*.json")),"\n",a.createElement(t.li,null,"Less the overrides array, the contents of the file do not match that of the same model path in the vanilla resources","\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"this is intended to prevent the bloating of the pack by models that function the same as vanilla models"),"\n"),"\n"),"\n"),"\n",a.createElement(t.h3,{id:"block-models",style:{position:"relative"}},a.createElement(t.a,{href:"#block-models","aria-label":"block models permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Block Models"),"\n",a.createElement(t.p,null,"Note that while the process for resolving block models for conversion is described here, Geyser does not currently have support for block mappings. The process for identifying which block models need to be converted should follow this outline:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"For all files matching ",a.createElement(t.code,null,"assets/minecraft/blockstates/*.json")," from the vanilla resources, construct an array of all listed models, which are contained under the JSON paths ",a.createElement(t.code,null,".multipart.[].apply.model")," and ",a.createElement(t.code,null,".variants.*.model")),"\n",a.createElement(t.li,null,"For all files in the given resource pack that correspond to a file matching ",a.createElement(t.code,null,"assets/minecraft/blockstates/*.json")," from the vanilla resources construct an array of all listed models using the JSON paths defined above"),"\n",a.createElement(t.li,null,"Combine these arrays and remove duplicate entries"),"\n",a.createElement(t.li,null,"Construct an array of all model JSONs in the given resource pack"),"\n",a.createElement(t.li,null,"Find the union of the model JSONs array and the array derrived from blockstate entries"),"\n"),"\n",a.createElement(t.h2,{id:"parental-filtering-and-resolution",style:{position:"relative"}},a.createElement(t.a,{href:"#parental-filtering-and-resolution","aria-label":"parental filtering and resolution permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Parental Filtering and Resolution"),"\n",a.createElement(t.p,null,"Next, the parental status of each model must be determined, whether the model is a predicate entry or a vanilla item model."),"\n",a.createElement(t.h3,{id:"parental-resolution",style:{position:"relative"}},a.createElement(t.a,{href:"#parental-resolution","aria-label":"parental resolution permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Parental Resolution"),"\n",a.createElement(t.p,null,"Nearly all models in the vanilla resources use parentals in order to prevent the repetition of common model elements. This means that the textures, elements, and display settings of a given model will not always be listed in a given model file. However, these must be known before the conversion of the model can occur. As a result, these must be resolved for any block or item model that has been identified for conversion. This is one of the most computationally expensive parts of the conversion process. Furthermore, all textures must be known for texture atlas generation to be completed, as the optimal atlas generation process relies on finding texture overlap accross models. Given that these values will be used quite a ways down the road, it may be impractical to store these all in memory, especially since some high element count models can sometimes have file sizes in the tens of megabytes. It would likely be useful to store the texture list of each model in memory since those will be used shortly in the atlas generation step. This process can be performed in parallel for each model. In the case of item models parental resolution should attempt to continue until the end of the parent chain is reached or elements, textures, and display settings have been found for the model. This is the same for block models, except resolution can stop when elements and textures are found, since display settings are not relavent to block models."),"\n",a.createElement(t.h3,{id:"parental-filtering",style:{position:"relative"}},a.createElement(t.a,{href:"#parental-filtering","aria-label":"parental filtering permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Parental Filtering"),"\n",a.createElement(t.p,null,"Based on the resolved parent, some decisions must be made with regards to the model conversion that will occur later. The most obvious case of this is the parent ",a.createElement(t.code,null,"minecraft:builtin/generated"),". Java models that lead to this parental will render an extruded mesh from a provided texture. There are two ways to mimic this behavior on Bedrock, the pros and cons of which will be discussed in the geometry conversion section."),"\n",a.createElement(t.h2,{id:"texture-atlas-generation",style:{position:"relative"}},a.createElement(t.a,{href:"#texture-atlas-generation","aria-label":"texture atlas generation permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Texture Atlas Generation"),"\n",a.createElement(t.p,null,"Texture atlases must be generated for each item model, as Bedrock models when implemented as entities via attachables may only have one texture. Items with the ",a.createElement(t.code,null,"minecraft:builtin/generated")," parent should be excluded from this process, since meither method by which they can be displayed allows for UV manipulation. For models that are used only for blocks, it is technically possible to use material instances instead of atlas generation. This would be most helpful in cases where many block models with shared textures are used, and the traditional method of atlas generation would lead to instability due to the size of the generated atlases."),"\n",a.createElement(t.p,null,"It should be noted that this is the most difficult part of the pack conversion process from a clientside performance perspective. Since Bedrock supports mobile devices, it is unreasonable to expect that all Bedrock players will have access to a desktop grade GPU. At a maximum, one should aim for generated atlases to be no larger than 4096, though in particularly low spec devices like the Nintendo Switch, even this may be pushing the envelope."),"\n",a.createElement(t.h3,{id:"atlas-inclusion",style:{position:"relative"}},a.createElement(t.a,{href:"#atlas-inclusion","aria-label":"atlas inclusion permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Atlas Inclusion"),"\n",a.createElement(t.p,null,"For our purposes, atlas inclusion will be the process of deciding which textures will be combined into atlases. In my opinion, the optimal method for atlas inclusion follows a proposed algorithim, which should be looped over each item model's texture list. The first item model texture list should be placed as the first entry in a list of texture lists. For all subsequent item model texture lists:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Check to see if the new item model texture lists has any overlapping textures with the current list of texture lists"),"\n",a.createElement(t.li,null,"Any texture lists that overlap with new item model texture list should be combined with each other"),"\n",a.createElement(t.li,null,"If no texture lists overlap with the new item model texture list, the item model texture list should be placed as its own entry in the list of texture lists"),"\n",a.createElement(t.li,null,"The process should continue to the next item model texture list until all item model texture lists have been itterated over"),"\n"),"\n",a.createElement(t.p,null,"There are, however, some drawbacks to this method. As previously stated, the size of generated atlases should be kept at a minimum. In packs in which models use mutliple large shared textures, this will lead to the generation of extremely large atlases. Unfortunately, the solution to this problem will often be to reduce texture resolution and reduce the size of shared texture networks in cases where they lead to this result. Such optimizations will likely need to be done manually."),"\n",a.createElement(t.h3,{id:"atlas-construction",style:{position:"relative"}},a.createElement(t.a,{href:"#atlas-construction","aria-label":"atlas construction permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Atlas Construction"),"\n",a.createElement(t.p,null,"Atlases should, of course, be constructed to minimize empty space. In addition, the location of all textures on atlases must be recorded. This is needed to direct UV shifts in the actual model conversion process. The X and Y pixel coordinates and texture path are sufficent."),"\n",a.createElement(t.h2,{id:"geometry-conversion",style:{position:"relative"}},a.createElement(t.a,{href:"#geometry-conversion","aria-label":"geometry conversion permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Geometry Conversion"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)};function i(e){let{children:t}=e;return t}function s(e){return a.createElement(i,e,a.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-templates-doc-js-content-file-path-home-runner-work-mcjava-wiki-mcjava-wiki-pages-docs-bedrock-equivalencies-resource-pack-conversion-mdx-011f83b9d636f5e3fcd4.js.map
### VERIFY " " exists only as specified space-blank values

How to fill creat fields
0. Header for templates are taken from column tempHeader, if empty then its not counted as header

1. With Search helps: these fields get their input value by selection in list, type input and valueHelp marked; retValue has to be the one mockserver sents

id,retFieldId,retValue,valueHelp,mandatory,setValue,tempHeader,duplicate,excludeMass,type
in1,Preiv,Periv 1,x,x,,Preiv,,,input

|-----|------------|----------|-----------|-----------|----------|------------|-----------|-------------|-------|
| id  | retFieldId | retValue | valueHelp | mandatory | setValue | tempHeader | duplicate | excludeMass | type  |
|-----|------------|----------|-----------|-----------|----------|------------|-----------|-------------|-------|
| in1 | Preiv      | Periv 1  | x         | x         |          | Preiv      |           |             | input |
|-----|------------|----------|-----------|-----------|----------|------------|-----------|-------------|-------|

2. Without Search helps: builder identifies them because valuehelp is empty and sets setValue for input

id,retFieldId,retValue,valueHelp,mandatory,setValue,tempHeader,duplicate,excludeMass,type
in2,Ltext,in2Ltext,,x,in2Ltext,Ltext,,,input

|-----|------------|----------|-----------|-----------|----------|------------|-----------|-------------|-------|
| id  | retFieldId | retValue | valueHelp | mandatory | setValue | tempHeader | duplicate | excludeMass | type  |
|-----|------------|----------|-----------|-----------|----------|------------|-----------|-------------|-------|
| in2 | Ltext      | in2Ltext |           | x         | in2Ltext | Ltext      |           |             | input |
|-----|------------|----------|-----------|-----------|----------|------------|-----------|-------------|-------|


3. Exclude Mass marks does fields that wont count for Mass Upload

id,retFieldId,retValue,valueHelp,mandatory,setValue,tempHeader,duplicate,excludeMass,type
in17,strkorr,strkorr 1,x,x,,,,x,input

|------|------------|-----------|-----------|-----------|----------|------------|-----------|-------------|-------|
| id   | retFieldId | retValue  | valueHelp | mandatory | setValue | tempHeader | duplicate | excludeMass | type  |
|------|------------|-----------|-----------|-----------|----------|------------|-----------|-------------|-------|
| in17 | strkorr    | strkorr 1 | x         | x         |          |            |           | x           | input |
|------|------------|-----------|-----------|-----------|----------|------------|-----------|-------------|-------|


4. Duplicate accepts a number for fields that have the same value help

id,retFieldId,retValue,valueHelp,mandatory,setValue,tempHeader,duplicate,excludeMass,type
in1,Preiv,Periv 1,x,x,,Preiv,,,input
in2,Preiv,Periv 1,x,x,,Preiv,1,,input
in3,Preiv,Periv 1,x,x,,Preiv,2,,input

|-----|------------|----------|-----------|-----------|----------|------------|-----------|-------------|-------|
| id  | retFieldId | retValue | valueHelp | mandatory | setValue | tempHeader | duplicate | excludeMass | type  |
|-----|------------|----------|-----------|-----------|----------|------------|-----------|-------------|-------|
| in1 | Preiv      | Periv 1  | x         | x         |          | Preiv      |           |             | input |
|-----|------------|----------|-----------|-----------|----------|------------|-----------|-------------|-------|
| in2 | Preiv      | Periv 1  | x         | x         |          | Preiv      |         1 |             | input |
|-----|------------|----------|-----------|-----------|----------|------------|-----------|-------------|-------|
| in3 | Preiv      | Periv 1  | x         | x         |          | Preiv      |         2 |             | input |
|-----|------------|----------|-----------|-----------|----------|------------|-----------|-------------|-------|

5. Checkbox, setValue if true (x) or false (); and same in retValue

id,retFieldId,retValue,valueHelp,mandatory,setValue,tempHeader,duplicate,excludeMass,type
in3,Xkale,x,,,x,Xkale,,,checkbox
|-----|------------|----------|-----------|-----------|----------|------------|-----------|-------------|----------|
| id  | retFieldId | retValue | valueHelp | mandatory | setValue | tempHeader | duplicate | excludeMass | type     |
|-----|------------|----------|-----------|-----------|----------|------------|-----------|-------------|----------|
| in3 | Xkale      | x        |           |           | x        | Xkale      |           |             | checkbox |
|-----|------------|----------|-----------|-----------|----------|------------|-----------|-------------|----------|

6. Select, retValue is fisrt val on select list; setvalue empty, type select

id,retFieldId,retValue,valueHelp,mandatory,setValue,tempHeader,duplicate,excludeMass,type
in28,CHRULE,Chrule 1,,x,,CHRULE,,,select

|------|------------|----------|-----------|-----------|----------|------------|-----------|-------------|--------|
| id   | retFieldId | retValue | valueHelp | mandatory | setValue | tempHeader | duplicate | excludeMass | type   |
|------|------------|----------|-----------|-----------|----------|------------|-----------|-------------|--------|
| in28 | CHRULE     | Chrule 1 |           | x         |          | CHRULE     |           |             | select |
|------|------------|----------|-----------|-----------|----------|------------|-----------|-------------|--------|

7. Property in Odata but not used

id,retFieldId,retValue,valueHelp,mandatory,setValue,tempHeader,duplicate,excludeMass,type
in1,Werks,Werks 1,x,x,,Werks,,,input
,Eromat,,,,,Eromat,,,

|-----|------------|----------|-----------|-----------|----------|------------|-----------|-------------|-------|
| id  | retFieldId | retValue | valueHelp | mandatory | setValue | tempHeader | duplicate | excludeMass | type  |
|-----|------------|----------|-----------|-----------|----------|------------|-----------|-------------|-------|
| in1 | Werks      | Werks 1  | x         | x         |          | Werks      |           |             | input |
|-----|------------|----------|-----------|-----------|----------|------------|-----------|-------------|-------|
|     | Eromat     |          |           |           |          | Eromat     |           |             |       |
|-----|------------|----------|-----------|-----------|----------|------------|-----------|-------------|-------|

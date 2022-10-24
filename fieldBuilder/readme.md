How to fill creat fields
1. With Search helps: these fields get their input value by selection in list

id,retFieldId,retValue,valueHelp,mandatory,setValue,tempHeader,duplicate,excludeMass
in1,Ktopl,Ktopl 1,x,x,,x,,

|-----|------------|----------|-----------|-----------|----------|------------|-----------|-------------|
| id  | retFieldId | retValue | valueHelp | mandatory | setValue | tempHeader | duplicate | excludeMass |
|-----|------------|----------|-----------|-----------|----------|------------|-----------|-------------|
| in1 | Ktopl      | Ktopl 1  | x         | x         |          | x          |           |             |
|-----|------------|----------|-----------|-----------|----------|------------|-----------|-------------|

2. Without Search helps: builder identifies them because valuehelp is empty and sets setValue for input

id,retFieldId,retValue,valueHelp,mandatory,setValue,tempHeader,duplicate,excludeMass
in2,,in2Komok,,x,in2Komok,x,,

|-----|------------|----------|-----------|-----------|----------|------------|-----------|-------------|
| id  | retFieldId | retValue | valueHelp | mandatory | setValue | tempHeader | duplicate | excludeMass |
|-----|------------|----------|-----------|-----------|----------|------------|-----------|-------------|
| in2 |            | in2Komok |           | x         | in2Komok | x          |           |             |
|-----|------------|----------|-----------|-----------|----------|------------|-----------|-------------|

3. Exclude Mass marks does fields that wont count for Mass Upload

id,retFieldId,retValue,valueHelp,mandatory,setValue,tempHeader,duplicate,excludeMass
in17,strkorr,strkorr 1,x,,,,,x

|------|------------|-----------|-----------|-----------|----------|------------|-----------|-------------|
| id   | retFieldId | retValue  | valueHelp | mandatory | setValue | tempHeader | duplicate | excludeMass |
|------|------------|-----------|-----------|-----------|----------|------------|-----------|-------------|
| in17 | strkorr    | strkorr 1 | x         |           |          |            |           | x           |
|------|------------|-----------|-----------|-----------|----------|------------|-----------|-------------|


4. Duplicate accepts a number for fields that have the same value help

id,retFieldId,retValue,valueHelp,mandatory,setValue,tempHeader,duplicate,excludeMass
in4,Saknr,Saknr 1,x,x,,x,,
in5,Saknr,Saknr 1,x,x,,x,1,
in6,Saknr,Saknr 1,x,x,,x,2,

|-----|------------|----------|-----------|-----------|----------|------------|-----------|-------------|
| id  | retFieldId | retValue | valueHelp | mandatory | setValue | tempHeader | duplicate | excludeMass |
|-----|------------|----------|-----------|-----------|----------|------------|-----------|-------------|
| in4 | Saknr      | Saknr 1  | x         | x         |          | x          |           |             |
|-----|------------|----------|-----------|-----------|----------|------------|-----------|-------------|
| in5 | Saknr      | Saknr 1  | x         | x         |          | x          |         1 |             |
|-----|------------|----------|-----------|-----------|----------|------------|-----------|-------------|
| in6 | Saknr      | Saknr 1  | x         | x         |          | x          |         2 |             |
|-----|------------|----------|-----------|-----------|----------|------------|-----------|-------------|



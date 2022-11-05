NOTES:
0. rerun test, if in doubt restart explorer, vscode as rerun
1. Always use 'forceSelect: true,'
2. Interaction 'press' for clickable; interaction 'focus' to retrieve value of input
3. Dont reuse controls.asControl; only reuse the selector to await a new asControl
4. If control hides at some point it will disapear from the DOM; asControl has to be requested again (reuse the selector only)
5. Controls meant to be clicked by user can be "clicked" with press() method

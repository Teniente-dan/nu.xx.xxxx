NOTES:
0. rerun test, if in doubt restart explorer, vscode as rerun
1. Always use 'forceSelect: true,'
2. Interaction 'press' for clickable; interaction 'focus' to retrieve value of input
3. Dont reuse controls.asControl; only reuse the selector to await a new asControl
4. If control hides at some point it will disapear from the DOM; asControl has to be requested again (reuse the selector only)
5. Controls meant to be clicked by user can be "clicked" with press() method

6. Tests Tasks should create their own context eg:
<blockquote>  

    it("should set select key 2 and enable in29 ", async () => {        
        const managementRadio = await CreateView.getRadioButtonManagement();
        await managementRadio.press();
        ...
    }
</blockquote>

7. It is possible to send keys\
<blockquote>

    await browser.keys("Down arrow");
</blockquote>

8. To select or get items of select/combobox
<blockquote>
first open select
    
    await select.open();    
</blockquote>
<blockquote>
then get items

    const items = await select.getItems();
</blockquote>
<blockquote>
and press desired one

    await items[0].press();
</blockquote>

9. <b>input.getEnabled();</b> only posibble for <b>interaction: "focus",</b>
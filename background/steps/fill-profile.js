(function attachBackgroundStep5(root, factory) {
  root.MultiPageBackgroundStep5 = factory();
})(typeof self !== 'undefined' ? self : globalThis, function createBackgroundStep5Module() {
  function createStep5Executor(deps = {}) {
    const {
      addLog,
      generateRandomBirthday,
      generateRandomName,
      getState = null,
      setState = null,
      sendToContentScript,
    } = deps;

    async function executeStep5() {
      let firstName, lastName;

      // Try to use stored name from Cloudflare Temp Email generation
      if (typeof getState === 'function') {
        try {
          const state = await getState();
          if (state?.cloudflareGeneratedFirstName && state?.cloudflareGeneratedLastName) {
            firstName = state.cloudflareGeneratedFirstName;
            lastName = state.cloudflareGeneratedLastName;
            await addLog(`步骤 5：使用已存储的姓名 ${firstName} ${lastName}（来自 Cloudflare Temp Email 生成）`);
          }
        } catch {}
      }

      // Fallback to generating a new random name
      if (!firstName || !lastName) {
        const name = generateRandomName();
        firstName = name.firstName;
        lastName = name.lastName;
      }

      // Save the name to state so email generation can use it later
      if (typeof setState === 'function') {
        try {
          await setState({
            cloudflareGeneratedFirstName: firstName,
            cloudflareGeneratedLastName: lastName,
          });
        } catch {}
      }

      const { year, month, day } = generateRandomBirthday();

      await addLog(`步骤 5：已生成姓名 ${firstName} ${lastName}，生日 ${year}-${month}-${day}`);

      await sendToContentScript('signup-page', {
        type: 'EXECUTE_NODE',
        nodeId: 'fill-profile',
        step: 5,
        source: 'background',
        payload: {
          firstName,
          lastName,
          year,
          month,
          day,
        },
      });
    }

    return { executeStep5 };
  }

  return { createStep5Executor };
});

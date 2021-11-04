# Steps to run this project on your desktop

1. Get latest code
2. Open PPPScripts folder using VS Code
3. Create XrmDefinitelyTyped.exe.config in \XrmDefinitelyTyped folder and add your mfaAppId and mfaClientSecret.
4. Run XrmDefinitelyTyped.exe (skip if no form change nor entity change)
5. npm install
6. npm run build
7. Take the .js file in \build and update the web resource file in Dynamics 365.
8. Don't forget to push your change if there is any.

# XrmDefinitelyTyped.exe.config

```
<?xml version="1.0" encoding="utf-8"?>
<configuration>
	<appSettings>
		<add key="url" value="https://romts-gsrst-dev-tcd365.crm3.dynamics.com/XRMServices/2011/Organization.svc" />
		<add key="method" value="ClientSecret" />
		<add key="mfaAppId" value="YourMfaAppId" />
		<add key="mfaClientSecret" value="YourClientSecret" />
		<add key="solutions" value="" />
		<add key="out" value="../typings/XRM" />
		<add key="entities" value="ppp_traveller, ppp_caller" />
		<add key="web" value="" />
		<add key="jsLib" value="../src/lib" />
	</appSettings>
</configuration>
```

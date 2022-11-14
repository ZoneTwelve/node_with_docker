# Node.js application container
This is the sealhub deploy service, that contain the entire application with outside component on it.

If you want to start it up, you need copy the `deafult.env` to the `,env`, then remvoe the `sql/mysql-data` and `sql/mysql-files`.

Maybe your application (Sealhub) will support SSL/TLS, that also need you given the cert file on the ssl folder.

The ssl files will put into the `$PWD/app/ssl` folder.

That's all for now [date=2022-11-14 21:04]

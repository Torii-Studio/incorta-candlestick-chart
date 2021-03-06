## Incorta Candlestick chart

Displays a candlestick chart. This is an example
of combinining real-time data fetched from an external source with stored data. This
technique could also be used in FOREX appliciations.

<img width="341" alt="Sample of rendered crypto tile" src="assets/sample.png">

To try it out:

(These are abbreviated instructions -- for a more complete guide, see [Getting Started with the Incorta Component SDK](https://community.incorta.com/t/p8hjygp/getting-started-component-sdk)

- Install the create-incorta-component scripts with `% npm install -g @incorta-org/create-incorta-component`
- `git clone` the repository
- `cd` into the project directory and install dependencies: `npm install`
- Run the incorta component server: `create-incorta-component start`
- Upload the `data/historical.csv` file into Incorta and create a schema for it. Be sure to load the data.
- Navigate to the Incorta analyzer and choose the Developer Visual plugin
- Drag columns containing coin identifiers (i.e. 'bitcoin', 'ethereum'), and column containing coin holdings (quantity) into the binding tray

See the [SETUP](./SETUP.md) doc for development environment setup instructions.

#### Future improvements

- Internationalization
- Allow the user to select a base currency
- Computation of total portfolio value
- Add tests

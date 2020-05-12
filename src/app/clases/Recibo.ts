export class Recibo {
	constructor(
		public nroRecibo: number,
		public empleado: string,
		public detalle: string,
		public subTotal: number,
		public total: number,
        public efectivo: boolean,
        public fechaPago: Date
	) {}
}

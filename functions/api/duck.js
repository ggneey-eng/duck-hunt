export async function onRequestPost(context) {
    try {
        const body = await context.request.json();
        const code = (body.code || "").trim().toUpperCase();

        const ducks = {
            "L7KQ-4M": {
                message: "İlk ördeğini buldun. 🦆❤️ O ne kadar küçükse, benim sana olan sevgim de o kadar büyük. Umarım diğerlerini ararken delirmezsin. Aramaya çalışma, onlar karşına çıkar"
            }
        };

        if (!ducks[code]) {
            return Response.json(
                { success: false },
                { status: 404 }
            );
        }

        return Response.json({
            success: true,
            message: ducks[code].message
        });

    } catch {
        return Response.json(
            { success: false },
            { status: 400 }
        );
    }
}

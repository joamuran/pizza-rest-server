<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" />
    <xsl:template match="/pizzes">
        <html>
            <body>
                <h2>Menu de Pizzes</h2>
                <table border="1">
                    <tr>
                        <th>Nom</th>
                        <th>Ingredients</th>
                        <th>Preu</th>
                    </tr>
                    <xsl:for-each select="pizza">
                        <tr>
                            <td>
                                <xsl:value-of select="nom" />
                            </td>
                            <td>
                                <xsl:value-of select="ingredients" />
                            </td>
                            <td>
                                <xsl:value-of select="preu" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>